import Terrian from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import SkiDayRow from './SkiDayRow'
import { PropTypes } from 'react'

const SkiDayList = ({days}) => (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Resort</th>
          <th>Powder</th>
          <th>Backcountry</th>
        </tr>
      </thead>
      <tbody>
        {days.map((day,i) => <SkiDayRow key={i} {...day} />)}
      </tbody>
    </table>
)
 SkiDayList.propTypes = {
   days: (props) =>((!Array.isArray(props.days)) ? new Error('It Should be an Array with atleast one Object') :
   (!props.days.length) ? new Error('It Should be an Array with atleast one Object') : null
)
}

export default SkiDayList
