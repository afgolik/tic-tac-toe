import styles from './GameField.module.css'
import { GameFieldItemContainers } from './GameFieldItemContainers'
import PropTypes from 'prop-types'

export const GameField = (props) => {
	function getFieldItems() {
		const array = []
		for (let i = 0; i < 9; i++) {
			array.push(
				<GameFieldItemContainers
					key={i}
					handleItem={props.handleItem}
					moveInfo={props.moveInfo}
					winner={props.winner}
					isReset={props.isReset}
					index={i}
				/>,
			)
		}
		return array
	}
	return <div className={styles.gameField}>{getFieldItems()}</div>
}

GameField.propTypes = {
	handleItem: PropTypes.func,
	moveInfo: PropTypes.string,
	isReset: PropTypes.bool,
	winner: PropTypes.string,
}
