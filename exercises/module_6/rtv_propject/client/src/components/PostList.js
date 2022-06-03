import Post from './Post'

export default function PostList({ posts }) {
	return (
		<div className='post-list'>
			{posts.map(post => (
				<Post {...post} key={post._id} />
			))}
		</div>
	)
}
