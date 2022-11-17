const btn = document.querySelectorAll('.btn')
const playerText = document.querySelector('#playerText')
const computerText = document.querySelector('#computerText')
const resultText = document.querySelector('#result')

let player
let computer
let result

btn.forEach(button =>
	button.addEventListener('click', () => {
		player = button.textContent
		computerTurn()
		playerText.textContent = `Player: ${player}`
		computerText.textContent = `Computer: ${computer}`
		resultText.textContent = winner()
	})
)

function computerTurn() {
	const randNumber = Math.floor(Math.random() * 4)

	switch (randNumber) {
		case 1:
			computer = 'stone'
			break
		case 2:
			computer = 'paper'
			break
		case 3:
			computer = 'scissors'
			break
	}
}

function winner() {
	if (player == computer) {
		return 'draw'
	} else if (computer == 'stone') {
		return player == 'paper' ? 'you win' : ' you lose'
	} else if (computer == 'paper') {
		return player == 'scissors' ? 'you win' : ' you lose'
	} else if (computer == 'scissors') {
		return player == 'stone' ? 'you win' : ' you lose'
	}
}
