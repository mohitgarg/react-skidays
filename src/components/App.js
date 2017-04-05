import { createClass } from 'react'
import SkiDayList from './SkiDayList'
import SkiDayCount from './SkiDayCount'
import AddDayForm  from './AddDayForm'
import Menu from './Menu'

const App = createClass({
  getInitialState () {
      return {
        allSkiDays: [
    			{
    				resort:"Square Valley",
    				date: "1/2/2017",
    				powder:true,
    				backcountry:false
    			},
    		]
      }
  },
  addDay(newDay) {
    this.setState({
      allSkiDays: [
        ...this.state.allSkiDays,
        newDay
      ]
    })
  },
  countDays(filter) {
    return this.state.allSkiDays.filter((day) => (filter) ? day[filter] : day ).length
  },
  render () {
    return (
      <div className='app'>
        <Menu />
        {
        (this.props.location.pathname === '/') ?
        <SkiDayCount total={this.countDays()} powder={this.countDays('powder')} backcountry={this.countDays('backcountry')} /> :
        (this.props.location.pathname === '/add-day') ?
        <AddDayForm onNewDay={this.addDay}/> :
        <SkiDayList days={this.state.allSkiDays} filter={this.props.params.filter}/>
        }
      </div>
    )
  }
})

export default App
