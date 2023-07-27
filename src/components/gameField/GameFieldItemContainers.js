import { useState } from 'react'
import PropTypes from 'prop-types'
import { GameFieldItemLayout } from './GameFieldItemLayout'

export const GameFieldItemContainers = (props) => {
	const [state, setState] = useState(null)

	if (props.isReset && state !== null) setState(null)

	function handleClick() {
		if (state === null && props.winner === null) {
			setState(props.moveInfo)
			props.handleItem(props.index)
		}
	}
	return (
		<GameFieldItemLayout
			handleClick={handleClick}
			isReset={props.isReset}
			winner={props.winner}
			index={props.index}
			state={state}
		/>
	)
}

GameFieldItemContainers.propTypes = {
	isReset: PropTypes.bool,
	moveInfo: PropTypes.string,
	winner: PropTypes.string,
	handleItem: PropTypes.func,
	index: PropTypes.number,
}
