import { createClass } from 'react'
import SkiDayList from './SkiDayList'
import SkiDayCount from './SkiDayCount'

const App = createClass({
  getInitialState () {
      return {
        allSkiDays: [
    			{
    				resort:"Square Valley",
    				date: new Date("1/1/2017"),
    				powder:true,
    				backcountry:false
    			},
    			{
    				resort:"Silicon Valley",
    				date: new Date("2/1/2017"),
    				powder:true,
    				backcountry:true
    			},
    			{
    				resort:"Geek Valley",
    				date: new Date("3/1/2017"),
    				powder:false,
    				backcountry:false
    			}
    		]
      }
  },
  countDays(filter) {
    return this.state.allSkiDays.filter((day) => (filter) ? day[filter] : day ).length
  },
  render () {
    return (
      <div className='app'>
        <SkiDayList days={this.state.allSkiDays}/>
        <SkiDayCount total={this.countDays()} powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} />
      </div>
    )
  }
})

export default App
