const button = document.querySelector(".dropup__button");
const list = document.querySelector(".dropup__list");
const optionItems = document.querySelectorAll(".dropup__list-item");

optionItems.forEach((item) => {
  item.addEventListener("click", () => {
    button.innerHTML = item.innerText;
    list.classList.toggle("dropup__list--visible");
  });
});


button.addEventListener("click", () => {
  list.classList.toggle("dropup__list--visible");
});
