const shortBreak = document.getElementById('short')
const longBreak = document.getElementById('long')
const button = document.getElementById('button')
const pomodoro = document.getElementById('pomodoro')
const minute = document.getElementById('minute')
const second = document.getElementById('second')

let workTime = 25
let shortTime = 5
let longTime = 15

let seconds = '00'

minute.innerText = workTime
second.innerText = seconds

let intervalId

function start() {
	document.getElementById('start').style.display = 'none'
	document.getElementById('stop').style.display = 'initial'

	seconds = 59

	let workMinutes = workTime - 1
	let breakMinutes = shortTime - 1

	breakCount = 0

	let timerFunction = () => {
		minute.innerText = workMinutes
		second.innerText = seconds

		seconds = seconds - 1

		if (seconds === 0) {
			workMinutes = workMinutes - 1
			if (workMinutes === -1) {
				if (breakCount % 2 === 0) {
					// start break

					workMinutes = breakMinutes
					breakCount++
				} else {
					workMinutes = workTime
					breakCount++
				}
			}
			seconds = 59
		}
	}
	intervalId = setInterval(timerFunction, 1000)
}

function stopInterval() {
	clearInterval(intervalId)
	document.getElementById('start').style.display = 'initial'
	document.getElementById('stop').style.display = 'none'
}
