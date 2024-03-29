import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import ProtectedRoute from './components/ProtectedRoute'
import { UserContext } from './context/UserProvider'

export default function App() {
	const { token, logout } = useContext(UserContext)

	return (
		<div className='app'>
			{token && <Navbar logout={logout} />}

			<Routes>
				<Route
					path='/'
					element={token ? <Navigate to='/profile' /> : <Auth />}
				/>
				<Route
					path='/profile'
					element={
						<ProtectedRoute token={token}>
							<Profile />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/public'
					element={
						<ProtectedRoute token={token}>
							<Public />
						</ProtectedRoute>
					}
				/>
			</Routes>
		</div>
	)
}
