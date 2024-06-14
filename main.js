const button = document.querySelector(".dropup__button");
const list = document.querySelector(".dropup__list");
const optionItems = document.querySelectorAll(".dropup__list-item");

optionItems.forEach((item) => {
  item.addEventListener("click", () => {
    button.innerHTML = item.innerText;
    list.classList.toggle("dropup__list--visible");
  });
});

button.addEventListener("click", function () {
  list.classList.toggle("dropup__list--visible");
});



const button1 = document.querySelector(".dropup__button1");
const list1 = document.querySelector(".dropup__list1");
const optionItems1 = document.querySelectorAll(".dropup__list-item1");

optionItems1.forEach((item) => {
  item.addEventListener("click", () => {
    button1.innerHTML = item.innerText;
    list1.classList.toggle("dropup__list--visible1");
  });
});

button1.addEventListener("click", function () {
  list1.classList.toggle("dropup__list--visible1");
});


