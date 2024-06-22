// switch gridlayout to 3x3
const gridLayoutButton = document.querySelector('.grid-layout__button')
const gridLayoutList = document.querySelector('.grid-layout__list')
const gridLayoutItem = document.querySelectorAll('.grid-layout__item')
const cardInner = document.querySelector('.card__inner')
const cards = document.querySelectorAll('.card__item')

gridLayoutItem.forEach((item) => {
  item.addEventListener('click', () => {
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
  item.addEventListener('click', () => {
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

function timeInCount() {
  startIn.innerText = timeIn

  if (timeIn != 0) {
    timeIn--
  } else {
    const startTimer = document.querySelector('.start-timer')
    startTimer.classList.add('start-timer--active')
    const bingoStartIn = document.querySelector('.bingo-startin')
    bingoStartIn.classList.remove('bingo-startin--active')
  }
}
// play function
// setInterval(timeInCount, 1000);

const coundDownEl = document.getElementById('countdown')
let timer = 600

setInterval(updateCountdown, 1000)

function updateCountdown() {
  const minutes = Math.floor(timer / 60)
  let seconds = timer % 60
  seconds = seconds < 10 ? '0' + seconds : seconds
  coundDownEl.innerHTML = `${minutes}: ${seconds} `
  timer--
}

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
        console.log(chore)
      } else {
        return
      }
    }, index * 350)
  })
})
