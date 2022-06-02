import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ logout }) {
	return (
		<nav>
			<Link to='/profile'>Profile</Link>
			<Link to='/public'>Public</Link>
			<p onClick={logout}>Logout</p>
		</nav>
	)
}
