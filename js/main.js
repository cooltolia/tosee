/*sidebar toggle*/

var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".sidebar__toggle");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  sidebar.classList.toggle("sidebar--open");
  hamburger.classList.toggle("sidebar__toggle--close");
});

/*select-modal toggle*/

var selectLang = document.querySelector(".select-modal--lang");
var selectLangOpen = document.querySelector(".actions__lang");
var selectLangClose = selectLang.querySelector(".select-modal__exit");

selectLangOpen.addEventListener("click", function(event) {
  event.preventDefault();
  selectLang.classList.add("select-modal--active");
})

selectLangClose.addEventListener("click", function(event) {
  event.preventDefault();
  selectLang.classList.remove("select-modal--active");
})

var selectPlace = document.querySelector(".select-modal--place");
var selectPlaceOpen = document.querySelector(".actions__place");
var selectPlaceClose = selectPlace.querySelector(".select-modal__exit");

selectPlaceOpen.addEventListener("click", function(event) {
  event.preventDefault();
  selectPlace.classList.add("select-modal--active");
})

selectPlaceClose.addEventListener("click", function(event) {
  event.preventDefault();
  selectPlace.classList.remove("select-modal--active");
})

