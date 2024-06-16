const gridLayoutButton = document.querySelector(".grid-layout__button");
const gridLayoutList = document.querySelector(".grid-layout__list");
const gridLayoutItem = document.querySelectorAll(".grid-layout__item");
const cardInner = document.querySelector(".card__inner")

gridLayoutItem.forEach((item) => {
  item.addEventListener("click", () => {
    gridLayoutButton.innerHTML = item.innerText;
    gridLayoutList.classList.toggle("dropup__list--visible");
    if ( item.innerText === '3x3'  ) {
      cardInner.classList.add('card__inner--three')
      
    } else {
      cardInner.classList.remove('card__inner--three')
    }
    
  });
});

gridLayoutButton.addEventListener("click", function () {
  gridLayoutList.classList.toggle("dropup__list--visible");
});



const cellCizeButton = document.querySelector(".cell-size__button");
const cellCizeList = document.querySelector(".cell-size__list");
const cellSizeItem = document.querySelectorAll(".cell-size__item");
const cardGame = document.querySelector('.card-game');


cellSizeItem.forEach((item) => {
  item.addEventListener("click", () => {
    cellCizeButton.innerHTML = item.innerText;
    cellCizeList.classList.toggle("dropup__list--visible");
    if ( item.innerText === 'full screen'  ) {
      cardGame.classList.add('card-game-full')
      
    } else {
      cardGame.classList.remove('card-game-full')
    }
  });
});

cellCizeButton.addEventListener("click", function () {
  cellCizeList.classList.toggle("dropup__list--visible");
});




const coundDownEl = document.getElementById('countdown'); 
let time = 600;
setInterval(updateCountdown, 1000);


function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60; 
  seconds = seconds < 10 ? "0" + seconds:
  seconds;
  coundDownEl.innerHTML =  `${minutes}: ${seconds} `;
  time -- ;
}









