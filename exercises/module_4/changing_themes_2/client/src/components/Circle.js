import React from 'react'
import { ThemeConsumer } from '../context/ThemeContext'
export default function Circle() {
	return (
		<ThemeConsumer>
			{({ theme, showNav, closeNav }) => (
				<div className='circle-container'>
					<div className={`${theme}-theme circle`}>
						<button id='close' onClick={closeNav}>
							<i className='fas fa-times'></i>
						</button>
						<button id='open' onClick={showNav}>
							<i className='fas fa-bars'></i>
						</button>
					</div>
				</div>
			)}
		</ThemeConsumer>
	)
}
