import React from 'react'

// ! instead of the 3 icons have 3 theme color icons
export default function HiddenNav() {
	return (
		<nav>
			<ul>
				<li>
					<i className='fas fa-home'>Grey</i>
				</li>
				<li>
					<i className='fas fa-user-alt'>Purple</i>
				</li>
				<li>
					<i className='fas fa-envelope'>Orange</i>
				</li>
			</ul>
		</nav>
	)
}
