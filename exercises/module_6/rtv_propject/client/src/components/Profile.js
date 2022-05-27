import React, { useContext } from 'react'
import PostForm from './PostForm.js'
import PostList from './PostList.js'
import { UserContext } from '../context/UserProvider'

export default function Profile() {
	const {
		user: { username },
		addPost,
		posts,
		token,
	} = useContext(UserContext)

	return (
		<div className='profile'>
			{token && <h1>Welcome {username}!</h1>}
			<h3>Add A Post</h3>

			<PostForm addPost={addPost} />
			<h3>Your Posts</h3>

			<PostList posts={posts} />
		</div>
	)
}
