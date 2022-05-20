import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import App from './App.js'
import './App.css'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(
	<BrowserRouter>
		<UserProvider>
			<App />
		</UserProvider>
	</BrowserRouter>
)
