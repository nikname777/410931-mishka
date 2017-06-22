var menuOpen = document.querySelector(".mobile-menu");
var menuPopup = document.querySelector(".main-nav__menu");

menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menuPopup.classList.toggle("main-nav__menu--open");
  menuOpen.classList.toggle("mobile-menu-close");
});




var buttonOpenForm = document.querySelector(".page-product__btn"),
  overlay = document.querySelector(".modal__overlay"),
  form = document.querySelector(".modal");

buttonOpenForm.addEventListener("click", function() {
  form.classList.add("modal__show-form");
  overlay.classList.add("modal__show-form");
});

if(overlay) {
  overlay.addEventListener("click", function(evt) {
  form.classList.remove("modal__show-form");
  overlay.classList.remove("modal__show-form");
});
}

