var menuOpen = document.querySelector(".modal");
var menuPopup = document.querySelector(".main-nav__menu");

menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menuPopup.classList.toggle("main-nav__menu--open");
  menuOpen.classList.toggle("modal-content-close");
});
