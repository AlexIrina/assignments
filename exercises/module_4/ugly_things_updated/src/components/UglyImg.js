import React, { useContext } from 'react'
import { UglyThingsContext } from '../context/UglyContext'
import warning from '../images/warning.jpeg'

export default function UglyImage({ title, imgUrl, description, id }) {
	const context = useContext(UglyThingsContext)
	return (
		<div className='main-image-card-container'>
			<h1>{title}</h1>

			<div className='responsive-main-img'>
				{imgUrl ? (
					<img src={imgUrl} alt={description} />
				) : (
					<img src={warning} alt={description} />
				)}
			</div>

			<p>{description}</p>

			<div className='edit-delete-container'>
				<button
					className='btn btn-delete'
					onClick={() => context.handleDelete(id)}
				>
					<i className='far fa-trash-alt'></i>Delete
				</button>
				<button className='btn btn-edit' onClick={() => context.handleEdit(id)}>
					<i className='far fa-edit'> </i>Edit Image
				</button>
			</div>
		</div>
	)
}
