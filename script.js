const mainButton = document.getElementById('js-btn')
const modeButtons = document.querySelector('#js-mode-buttons')

const timer = {
	pomodoro: 25,
	shortBreak: 5,
	longBreak: 15,
	longBreakInterval: 4,
}

let intervalId

modeButtons.addEventListener('click', handleMode)

function handleMode(e) {
	const { mode } = e.target.dataset

	if (!mode) return
	switchMode(mode)
}
