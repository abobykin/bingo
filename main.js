document.addEventListener('click', (e) => {
  
  if (e.target !== gridLayoutButton ) {
    gridLayoutList.classList.remove('dropup__list--visible')

  }
  if (e.target !== cellCizeButton ) {
    cellCizeList.classList.remove('dropup__list--visible')

  }

})


window.mobileCheck = function () {
  const width = window.innerWidth > 0 ? window.innerWidth : screen.width
  return width <= 768
}

const SPINNER_URL =
  'https://storage.googleapis.com/msgsndr/gIjYUjNX6k7qAMEqJDLW/media/6634b16ab2e176fa374b345f.gif'
const LOGO_URL =
  'https://storage.googleapis.com/msgsndr/gIjYUjNX6k7qAMEqJDLW/media/66314adca18c967536ab89bb.png'
const SUCCESS_URL =
  'https://storage.googleapis.com/msgsndr/gIjYUjNX6k7qAMEqJDLW/media/66314add21205c1ab4eab467.png'
const FAILURE_URL =
  'https://storage.googleapis.com/msgsndr/gIjYUjNX6k7qAMEqJDLW/media/66314adc7e32e21be8385ba0.png'
const PAUSE_URL =
  'https://storage.googleapis.com/msgsndr/gIjYUjNX6k7qAMEqJDLW/media/66369d5cb2e17684924dd8ea.svg'
const PLAY_URL =
  'https://storage.googleapis.com/msgsndr/gIjYUjNX6k7qAMEqJDLW/media/66369d5c72ff29f77fea4b2d.svg'

// switch gridlayout to 3x3
const gridLayoutButton = document.querySelector('.grid-layout__button')
const gridLayoutList = document.querySelector('.grid-layout__list')
const gridLayoutItem = document.querySelectorAll('.grid-layout__item')
const cardInner = document.querySelector('.card__inner')
const cards = document.querySelectorAll('.card__item')


gridLayoutItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const cards = document.querySelectorAll('.card__item')
    gridLayoutButton.innerHTML = item.innerText
    gridLayoutList.classList.toggle('dropup__list--visible')
    if (item.innerText === '3x3') {
      cardInner.classList.add('card__inner--three')
      cards.forEach((card, index) => {
        if (index > 8) {
          card.remove()
        }
      })
    } else {
      if (cards.length === 9) {
        cardInner.classList.remove('card__inner--three')
        for (let i = 0; i < 16; i++) {
          const cardItem = document.createElement('div')
          cardItem.className = 'card__item'
          const cardImg = document.createElement('img')
          cardImg.className = 'card__item-img'
          cardImg.src = '/images/card-img.png'
          cardItem.appendChild(cardImg)
          cardInner.appendChild(cardItem)
        }
      }
    }
  })
})

gridLayoutButton.addEventListener('click', function () {
  gridLayoutList.classList.toggle('dropup__list--visible')
})

// switch gridlayout to fullscreen
const cellCizeButton = document.querySelector('.cell-size__button')
const cellCizeList = document.querySelector('.cell-size__list')
const cellSizeItem = document.querySelectorAll('.cell-size__item')
const cardGame = document.querySelector('.card-game')

cellSizeItem.forEach((item) => {

  
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    cellCizeButton.innerHTML = item.innerText
    cellCizeList.classList.toggle('dropup__list--visible')
    if (item.innerText === 'full screen') {
      cardGame.classList.add('card-game-full')
    } else {
      cardGame.classList.remove('card-game-full')
    }
  })
})

cellCizeButton.addEventListener('click', function () {
  cellCizeList.classList.toggle('dropup__list--visible')
})

const startIn = document.getElementById('startin')
let timeIn = 3
const startTimer = document.querySelector('.start-timer')
const bingoStartIn = document.querySelector('.bingo-startin')

function timeInCount() {
  startIn.innerText = timeIn

  if (timeIn != 0) {
    timeIn--
  } else {
    startTimer.classList.add('start-timer--active')
    bingoStartIn.classList.remove('bingo-startin--active')
  }
}

const coundDownEl = document.getElementById('countdown')
let coundDownTimer = 600

// setInterval(updateCountdown, 1000)

// function updateCountdown() {
//   const minutes = Math.floor(coundDownTimer / 60)
//   let seconds = coundDownTimer % 60
//   seconds = seconds < 10 ? '0' + seconds : seconds
//   coundDownEl.innerHTML = `${minutes}: ${seconds} `
//   coundDownTimer--
// }

const circleTimerContainer = document.createElement('div')
circleTimerContainer.className = 'timer-container'
const svgn = 'http://www.w3.org/2000/svg'
const circleContainer = document.createElementNS(svgn, 'svg')
circleContainer.setAttribute('class', 'circle-container')
const circle = document.createElementNS(svgn, 'circle')
const radius = 90
circle.setAttribute('r', radius.toString())
circle.setAttribute('cx', '50%')
circle.setAttribute('cy', '50%')
circleContainer.appendChild(circle)
const initialDashArray = 2 * Math.PI * radius
circle.style.strokeDasharray = `${initialDashArray}px`

const timer = document.createElement('span')
let minutes = 10
let seconds = 0
timer.className = 'timer'
timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds
  .toString()
  .padStart(2, '0')}`

circleTimerContainer.appendChild(circleContainer)
circleTimerContainer.appendChild(timer)

startTimer.appendChild(circleTimerContainer)

// const gameTip = document.createElement('span')
// gameTip.className = 'tip'
// gameTip.innerText = 'Click on finished items and move to the next'

// const timerButtonsContainer = document.createElement('div')
// timerButtonsContainer.className = 'timer-buttons-container'
// const pauseButton = document.createElement('button')
// pauseButton.className = 'pause-button'
// const pauseImg = document.createElement('img')
// pauseImg.src = PAUSE_URL
// pauseImg.alt = 'pause'
// const playImg = document.createElement('img')
// playImg.src = PLAY_URL
// playImg.alt = 'play'

// pauseButton.appendChild(pauseImg)
// pauseButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   pauseButton.innerHTML = ''
//   pauseButton.appendChild(paused ? pauseImg : playImg)
//   paused = !paused
// })

// const resetButton = document.createElement('button')
// resetButton.className = 'reset-button'
// resetButton.innerText = 'Reset'
// resetButton.addEventListener('click', (e) => {
//   e.preventDefault()
//   minutes = 10
//   seconds = 1
//   pauseButton.innerHTML = ''
//   pauseButton.appendChild(pauseImg)
//   paused = false

//   Array.from(document.getElementsByClassName('marked')).forEach((el) =>
//     el.classList.remove('marked')
//   )
// })
// timerButtonsContainer.appendChild(pauseButton)
// if (window.mobileCheck()) {
//   timerButtonsContainer.appendChild(timer)
// }
// timerButtonsContainer.appendChild(resetButton)

// const timerContainer = document.createElement('div')
// timerContainer.className = 'col'
// timerContainer.appendChild(circleTimerContainer)
// timerContainer.appendChild(timerButtonsContainer)

// startTimer.appendChild(timerContainer) crashing here

const chores = [
  'Do the laundry',
  'Take out the trash',
  'Mow the lawn',
  'Do the dishes',
  'Wash the car',
  'Wash the carpet',
  'Clean the windows',
  'Dust the furniture',
]

const randomChore = chores[Math.floor(Math.random() * chores.length)]
const buttonGenerate = document.querySelector('.bingo-form__generate')
const buttonStart = document.querySelector('.bingo-form__start')



buttonGenerate.addEventListener('click', function () {
  // this is 0 point of plan
  chores.forEach((chore, index) => {
    buttonGenerate.classList.add('bingo-form__disabled')
    buttonGenerate.classList.remove('bingo-form__active')

    buttonStart.classList.remove('bingo-form__disabled')
    buttonStart.classList.add('bingo-form__active')



    setTimeout(function () {
      const randomCard = cards[Math.floor(Math.random() * cards.length)]
      const para = document.createElement('p')
      para.className = 'card__item-text'
      const text = document.createTextNode(chore)
      para.appendChild(text)

      // this is 1 point of plan
      if (!randomCard.classList.contains('card__item--active')) {
        randomCard.classList.add('card__item--active')
        randomCard.appendChild(para)
      } else {
        return
      }
    }, index * 350)
  })
})

const form = document.querySelector('.form-card')

buttonStart.addEventListener('click', () => {
  cardGame.classList.add('game-started')
  bingoStartIn.classList.add('bingo-startin--active')
  form.classList.add('form-card--hiden')
  setInterval(timeInCount, 1000)

  const cardsActive = document.querySelectorAll('.card__item--active')

  cardsActive.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('checked')

    })
  })


})
