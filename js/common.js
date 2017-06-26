// Меню на мобильной версии

var menuOpen = document.querySelector(".mobile-menu");
var menuPopup = document.querySelector(".main-nav");

menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menuPopup.classList.toggle("main-nav__menu--open");
  menuOpen.classList.toggle("mobile-menu-close");
});


// Модальное окно добавления товара

var buttonOpenForm = document.querySelector(".page-product__btn");
var overlay = document.querySelector(".modal__overlay");
var form = document.querySelector(".modal");

buttonOpenForm.addEventListener("click", function(event) {
  event.preventDefault();
  form.classList.add("modal__show-form");
  overlay.classList.add("modal__overlay-show");
});

if(overlay) {
  overlay.addEventListener("click", function(evt) {
  form.classList.remove("modal__show-form");
  overlay.classList.remove("modal__overlay-show");
});
}
