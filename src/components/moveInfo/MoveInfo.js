import styles from './MoveInfo.module.css'
import PropTypes from 'prop-types'

export const MoveInfo = (props) => {
	return props.winner === 'drawnGame' ? (
		<div className={styles.moveInfo}>Ничья</div>
	) : props.winner ? (
		<div className={styles.moveInfo}>
			Победил
			<img
				className={styles.img}
				src={`images/${props.moveInfo}.svg`}
				alt={props.moveInfo}
			/>
		</div>
	) : (
		<div className={styles.moveInfo}>
			Ваш ход
			<img
				className={styles.img}
				src={`images/${props.moveInfo}.svg`}
				alt={props.moveInfo}
			/>
		</div>
	)
}

MoveInfo.propTypes = {
	moveInfo: PropTypes.string,
	winner: PropTypes.string,
}
