export const winningCombinations = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
]

export function checkWinner(array) {
	for (let i = 0; i < winningCombinations.length; i++) {
		if (
			array.includes(winningCombinations[i][0]) &&
			array.includes(winningCombinations[i][1]) &&
			array.includes(winningCombinations[i][2])
		)
		{
			return true
		}
	}
	return false
}
