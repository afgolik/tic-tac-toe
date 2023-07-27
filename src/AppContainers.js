import { useState } from 'react'
import { checkWinner } from './utils'
import { AppLayout } from './AppLayout'

let crossesArray = []
let zeroesArray = []
export const AppContainers = () => {
	const [winner, setWinner] = useState(null)
	const [moveInfo, setMoveInfo] = useState('cross')
	const [isReset, setIsReset] = useState(false)
	function getIsWin(array) {
		if (array.length >= 3) {
			const isWin = checkWinner(array)
			if (isWin) {
				setWinner(moveInfo)
				return true
			}
		}
		return false
	}
	function handleItem(i) {
		if (isReset) setIsReset(false)
		let isWin
		if (moveInfo === 'cross') {
			crossesArray.push(i)
			isWin = getIsWin(crossesArray)
		} else {
			zeroesArray.push(i)
			isWin = getIsWin(zeroesArray)
		}
		if (!isWin) {
			if (crossesArray.length + zeroesArray.length === 9) {
				setWinner('drawnGame')
			}
			toggleMoveInfo()
		}
	}
	function toggleMoveInfo() {
		if (moveInfo === 'cross') {
			setMoveInfo('zero')
		} else {
			setMoveInfo('cross')
		}
	}
	function reset() {
		setMoveInfo('cross')
		crossesArray = []
		zeroesArray = []
		setWinner(null)
		setIsReset(true)
	}
	return (
		<AppLayout
			moveInfo={moveInfo}
			setWinner={setWinner}
			winner={winner}
			handleItem={handleItem}
			isReset={isReset}
			reset={reset}
		/>
	)
}
