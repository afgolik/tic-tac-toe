import styles from './GameField.module.css'

export const GameFieldItemLayout = (props) => {
	return (
		<div className={styles.item} onClick={props.handleClick}>
			{props.state && (
				<img
					className={styles.img}
					src={`images/${props.state}.svg`}
					alt={props.state}
				/>
			)}
		</div>
	)
}
