import styles from './AppLayout.module.css'
import { MoveInfo } from './components/moveInfo/MoveInfo'
import { GameField } from './components/gameField/GameField'
import { Button } from './components/button/Button'

export const AppLayout = (props) => {
	return (
		<div className={styles.app}>
			<MoveInfo moveInfo={props.moveInfo} winner={props.winner} />
			<GameField
				moveInfo={props.moveInfo}
				setWinner={props.setWinner}
				winner={props.winner}
				handleItem={props.handleItem}
				isReset={props.isReset}
			/>
			<Button handleClick={props.reset} />
		</div>
	)
}
