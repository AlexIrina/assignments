import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'browser-router'
import { ProtectedRoute } from './components/ProtectedRoute'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import { UserContext } from './context/UserProvider'
export const App = () => {
	const { token, logout } = useContext(UserContext)
	return (
		<>
			{}
			<Routes>
				{/* /Profile */}
				<Route></Route>
				{/* /Public */}
				<Route></Route>
			</Routes>
		</>
	)
}
