import { Link } from 'react-router'
import React, { useContext } from 'react'

import UserContext from '../context/UserProvider'

export const Navbar = () => {
	const { logout } = useContext(UserContext)
	return (
		<nav>
			<Link to='/profile'>Profile</Link>
			<Link to='/public'>Public</Link>
			<p onClick={() => console.log('Add a logout func')}>{logout}</p>
		</nav>
	)
}
