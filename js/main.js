const togleButton = document.querySelector(".site-header__btn");
const headerList = document.querySelector(".site-header__list");


togleButton.addEventListener("click", () =>{
headerList.classList.toggle("active")
})