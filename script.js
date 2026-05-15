const timer = document.getElementById('timer')
const startBtn = document.getElementById('startBtn')
const pauseBtn = document.getElementById('pauseBtn')
const resetBtn = document.getElementById('resetBtn')
const cyclesEl = document.getElementById('cycles')
const modeText = document.getElementById('modeText')
const statusText = document.getElementById('status')

const sandTop = document.getElementById('sandTop')
const sandBottom = document.getElementById('sandBottom')

let focusTime = 25 * 60
let breakTime = 5 * 60

let time = focusTime
let totalTime = focusTime

let isRunning = false
let isFocus = true

let cycles = 0

let interval

function updateDisplay() {

  const minutes = Math.floor(time / 60)
  const seconds = time % 60

  timer.innerText = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`

  const progress = time / totalTime

  sandTop.style.height = `${progress * 100}%`
  sandBottom.style.height = `${(1 - progress) * 100}%`
}

function startTimer() {

  if (isRunning) return

  isRunning = true

  interval = setInterval(() => {

    time--

    updateDisplay()

    if (time <= 0) {

      clearInterval(interval)

      isRunning = false

      if (isFocus) {

        cycles++

        cyclesEl.innerText = cycles

        isFocus = false

        time = breakTime
        totalTime = breakTime

        modeText.innerText = 'DESCANSO'

        statusText.innerText = 'Respire um pouco ☕'

      } else {

        isFocus = true

        time = focusTime
        totalTime = focusTime

        modeText.innerText = 'FOCO'
updateDisplay()
