import css from './OneItemOfStatistics.module.css'
import PropTypes from 'prop-types'
export const OneItemOfStatistics = ({label, percentage}) => {
    return(<li className={css.item} style={{  backgroundColor: getRandomHexColor()}}>
        <span className={css.label}>{label}</span>
        <span className={css.percentage}>{percentage}%</span>
      </li>)
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


OneItemOfStatistics.propTypes = {
label : PropTypes.string.isRequired,
percentage: PropTypes.number.isRequired,
}

