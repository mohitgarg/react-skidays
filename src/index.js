import React from 'react'
import { render } from 'react-dom'
import SkiDayCount from './components/SkiDayCount'
import App  from './components/App'
import './stylesheets/index.scss'
import './stylesheets/ui.scss'
import { Router, Route, hashHistory } from 'react-router'
import { Whoops404 } from './components/Whoops404'
window.React = React

render(
	<Router history={hashHistory}>
			<Route path='/' component={App} />
			<Route path='list-days' component={App}>
				<Route path=':filter' component={App}/>
			</Route>
			<Route path='add-day' component={App} />
			<Route path='*' component={Whoops404} />
	</Router>,
	document.getElementById('react-container')
)

// render(<SkiDayCount /> , document.getElementById('react-container'))
