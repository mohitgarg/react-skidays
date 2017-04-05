import React from 'react'
import { render } from 'react-dom'
import SkiDayCount from './components/SkiDayCount'
import SkiDayList  from './components/SkiDayList'

window.React = React

// render(
// 	<SkiDayList days={
// 		[
// 			{
// 				resort:"Square Valley",
// 				date: new Date("1/1/2017"),
// 				powder:true,
// 				backcountry:false
// 			},
// 			{
// 				resort:"Silicon Valley",
// 				date: new Date("2/1/2017"),
// 				powder:true,
// 				backcountry:true
// 			},
// 			{
// 				resort:"Geek Valley",
// 				date: new Date("3/1/2017"),
// 				powder:false,
// 				backcountry:false
// 			}
// 		]
// 	} />,
// 	document.getElementById('react-container')
// )

render(<SkiDayCount /> , document.getElementById('react-container'))
