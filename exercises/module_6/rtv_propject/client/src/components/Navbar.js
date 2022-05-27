import { Link } from 'react-router'

export const Navbar = ({ logout }) => {
	return (
		<nav>
			<Link to='/profile'>Profile</Link>
			<Link to='/public'>Public</Link>
			<p onClick={logout}>Logout</p>
		</nav>
	)
}
