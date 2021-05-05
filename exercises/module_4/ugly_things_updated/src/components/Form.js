import { useContext } from 'react'
import { UglyThingsContext } from '../context/UglyContext'

export default function Form() {
	const context = useContext(UglyThingsContext)
	// console.log(context)
	return (
		<div className='form-inputs'>
			<form onSubmit={context.handleSubmit}>
				<input
					placeholder='Image Title'
					onChange={context.handleChange}
					type='text'
					name='title'
					value={context.mainImage.title}
					id='title'
				/>
				<input
					placeholder='Image Description'
					onChange={context.handleChange}
					type='text'
					name='description'
					value={context.mainImage.description}
					id='description'
				/>
				<input
					placeholder='Image URL'
					onChange={context.handleChange}
					type='text'
					name='imgUrl'
					value={context.mainImage.imgUrl}
					id='imgUrl'
				/>
				{/* isEditing: true */}
				{context.isEditing ? (
					<>
						<button
							className='btn btn-save'
							type='button'
							onClick={() => context.updateImage(context.mainImage._id)}
						>
							save
						</button>

						<button
							className='btn btn-cancel'
							type='button'
							onClick={context.cancelSave}
						>
							cancel
						</button>
					</>
				) : (
					<button className='btn btn-add' type='submit'>
						<i className='fas fa-user-plus'></i>
						Add Image
					</button>
				)}
			</form>
		</div>
	)
}
