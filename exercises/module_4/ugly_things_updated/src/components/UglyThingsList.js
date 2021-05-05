import { useContext, useEffect } from 'react'
import { UglyThingsContext } from '../context/UglyContext'
import UglyImg from './UglyImg'
export default function ImageList() {
	const context = useContext(UglyThingsContext)

	useEffect(() => {
		context.getImages()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className='image-list'>
			{context.uglyImages.map(({ _id, title, description, imgUrl }) => {
				return (
					<UglyImg
						key={_id}
						id={_id}
						title={title}
						description={description}
						imgUrl={imgUrl}
					/>
				)
			})}
		</div>
	)
}
