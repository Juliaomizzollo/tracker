const timer = document.getElementById('timer')
        totalTime = focusTime

        modeText.innerText = 'FOCO'

        statusText.innerText = 'Hora de mergulhar nos estudos ✨'
      }

      updateDisplay()

      startTimer()
    }

  }, 1000)
}

function pauseTimer() {
  clearInterval(interval)
  isRunning = false
}

function resetTimer() {

  clearInterval(interval)

  isRunning = false

  isFocus = true

  time = focusTime
  totalTime = focusTime

  modeText.innerText = 'FOCO'

  statusText.innerText = 'Mantenha o foco.'

  updateDisplay()
}

startBtn.addEventListener('click', startTimer)
pauseBtn.addEventListener('click', pauseTimer)
resetBtn.addEventListener('click', resetTimer)

updateDisplay()
