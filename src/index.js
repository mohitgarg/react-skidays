import React from 'react'
import { render } from 'react-dom'
import SkiDayCount from './components/SkiDayCount'
import App  from './components/App'

window.React = React

render(
	<App/>,
	document.getElementById('react-container')
)

// render(<SkiDayCount /> , document.getElementById('react-container'))
