import styles from './Button.module.css'
import PropTypes from 'prop-types'

export const Button = (props) => {
	return (
		<button className={styles.button} onClick={props.handleClick}>
			Начать заново
		</button>
	)
}

Button.propTypes = {
	handleClick: PropTypes.func,
}
