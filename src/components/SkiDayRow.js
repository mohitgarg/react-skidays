import Terrian from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import { PropTypes } from 'react'

const SkiDayRow = ({ resort, date, powder, backcountry}) => (
          <tr>
            <td>
              {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
            </td>
            <td>
              {resort}
            </td>
            <td>
              {(powder) ? <SnowFlake /> : null}
            </td>
            <td>
              {(backcountry) ? <Terrian /> : null}
            </td>
          </tr>
)

SkiDayRow.propTypes = {
  resort:PropTypes.string.isRequired,
  date:PropTypes.instanceOf(Date).isRequired,
  powder:PropTypes.bool,
  backcountry:PropTypes.bool
}

export default SkiDayRow
