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

const pasteSpecialCardText = function (i) {
  const cards = document.querySelectorAll('.card__item')
  const specialP = document.createElement('p')
  specialP.className = 'card__item-special-text'
  const pText = document.createTextNode('free')
  specialP.appendChild(pText)
  if (!!cards[i]) {
    cards[i].appendChild(specialP)
  }
  const specialImg = document.querySelectorAll('.card__item-img')
  if (!!specialImg[i]) {
    specialImg[i].remove()
  }
}

const deleteSpecialCardText = function (i) {
  const cards = document.querySelectorAll('.card__item')
  const img = document.createElement('img')
  const specialTextCard = document.querySelector('.card__item-special-text')

  img.className = 'card__item-img'
  img.src = '/images/card-img.png'
  if (!!cards[i]) cards[i].appendChild(img)
  if (!!specialTextCard) {
    specialTextCard.remove()
  }
}

const adding16Cards = function () {
  for (let i = 0; i < 16; i++) {
    const cardItem = document.createElement('div')
    const cardImg = document.createElement('img')

    cardItem.className = 'card__item'
    cardImg.className = 'card__item-img'
    cardImg.src = '/images/card-img.png'
    cardItem.appendChild(cardImg)
    cardInner.appendChild(cardItem)
  }
  return
}

gridLayoutItem.forEach((item) => {
  item.addEventListener('click', (e) => {
    e.stopPropagation()
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
      deleteSpecialCardText(12)
      pasteSpecialCardText(4)
    } else {
      // condition below checks that 5x5 is clicked but not auto
      if (cards.length === 9) {
        cardInner.classList.remove('card__inner--three')

        adding16Cards()

        deleteSpecialCardText(4)
        pasteSpecialCardText(12)
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
    e.stopPropagation()
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

document.addEventListener('click', (e) => {
  if (e.target !== gridLayoutButton) {
    gridLayoutList.classList.remove('dropup__list--visible')
  }
  if (e.target !== cellCizeButton) {
    cellCizeList.classList.remove('dropup__list--visible')
  }
})

const startIn = document.getElementById('startin')
let timeIn = 2
const startTimer = document.querySelector('.start-timer')
const bingoStartIn = document.querySelector('.bingo-startin')


function timeInCount() {
  startIn.innerHTML = timeIn
  
  if (timeIn != 0) {
    timeIn--
  } else {
    startTimer.classList.add('start-timer--active')
    bingoStartIn.classList.remove('bingo-startin--active')
    cardGame.classList.add('game-started')            
  }
  
}





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
let seconds = 2
timer.className = 'timer'
timer.innerText = `${minutes.toString().padStart(2, '0')}:${seconds
  .toString()
  .padStart(2, '0')}`

circleTimerContainer.appendChild(circleContainer)
circleTimerContainer.appendChild(timer)

startTimer.appendChild(circleTimerContainer)


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
const buttonsWrapper = document.querySelector('.buttons__wrapper')
const buttonChange = document.querySelector('.bingo-form__change')
const taskListTextarea = document.getElementById('task')
const fieldset = document.querySelector('.bingo-form__fieldset')


buttonChange.addEventListener('click', function() {
  cardGame.classList.add('card-game--hiden')
  fieldset.classList.add('fieldset--active')
  buttonsWrapper.classList.remove('button__change')
  buttonGenerate.classList.remove('bingo-form__disabled')
  buttonGenerate.classList.add('bingo-form__active')


  


  
})



buttonGenerate.addEventListener('click', function () {
  // this is 0 point of plan
  buttonGenerate.classList.add('bingo-form__disabled')
  buttonGenerate.classList.remove('bingo-form__active')
  buttonsWrapper.classList.add('button__change')
  taskListTextarea.value = chores.join('\n')      
  buttonStart.classList.remove('bingo-form__disabled')
  buttonStart.classList.add('bingo-form__active-purple')
  if (cardGame.classList.contains('card-game--hiden')) {
    cardGame.classList.remove('card-game--hiden')
  }
  fieldset.classList.remove('fieldset--active')

  
  chores.forEach((chore, index) => {

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
        const cardRandomWithFree = randomCard.querySelector('.card__item-special-text')
        if (!!cardRandomWithFree) {
          cardRandomWithFree.classList.add('card__item-special-text--hidden')
        }
        
      } else {
        return
      }
    }, index * 350)
  })
})



const form = document.querySelector('.form-card')

buttonStart.addEventListener('click', () => {
  bingoStartIn.classList.add('bingo-startin--active')
  form.classList.add('form-card--hiden')
  setInterval(timeInCount, 1000)
  setInterval(timerOfChore, 1000)
  

  const cardsActive = document.querySelectorAll('.card__item--active')

  cardsActive.forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.add('checked')
    })
  })
})

  // FUNCTION for drawing timer could be here

  function drawingTimer() {
    const dashOffset = initialDashArray * (1 - (minutes * 60 + seconds) / 600)
    circle.style.strokeDashoffset = `${dashOffset}px`
  }

  function timerOfChore() {
    if (seconds > 0) {
      seconds --
    } else {
      seconds = 59   
      if (minutes > -1) {
        minutes--
      } 
     
    }

    drawingTimer()
    const materialTimer = document.querySelector('.timer')
    materialTimer.innerText = `${minutes}:${seconds.toString().length < 2 ? "0" + seconds : seconds}`
  
    

  }


  

