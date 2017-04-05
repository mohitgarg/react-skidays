import Terrian from 'react-icons/lib/md/terrain'
import SnowFlake from 'react-icons/lib/ti/weather-snow'
import Calendar from 'react-icons/lib/fa/calendar'
import '../stylesheets/ui.scss'
import { PropTypes } from 'react'

const percentToDecimal = (decimal) => `${decimal * 100} %`

const calcGoalProgress = (total, goal) => percentToDecimal(total / goal)

const SkiDayCount = ({ total=50, powder=20, backcountry=10, goal=100 }) => (
    <div className="ski-day-count">
        <div className="total-days">
            <span>{total}</span>
						<Calendar />
            <span>days</span>
        </div>
        <div className="powder-days">
            <span>{powder}</span>
						<SnowFlake />
            <span>days</span>
        </div>
        <div className="backcountry-days">
            <span>{backcountry}</span>
						<Terrian />
            <span>day</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)
SkiDayCount.propTypes = {
  total: PropTypes.number,
  powder: PropTypes.number,
  backcountry: PropTypes.number,
  goal:PropTypes.number
}

export default SkiDayCount
