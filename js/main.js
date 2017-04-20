/*sidebar toggle*/

var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".sidebar__toggle");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  sidebar.classList.toggle("sidebar--open");
  hamburger.classList.toggle("sidebar__toggle--close");
});

/*select-modal toggle*/
var body = document.querySelector("body");
var selectLang = document.querySelector(".select-modal--lang");
var selectLangOpen = document.querySelector(".actions__lang");
var selectLangClose = selectLang.querySelector(".select-modal__exit");

selectLangOpen.addEventListener("click", function(event) {
  event.preventDefault();
  selectLang.classList.add("select-modal--active");
  body.style.overflow = "hidden";
})

selectLangClose.addEventListener("click", function(event) {
  event.preventDefault();
  selectLang.classList.remove("select-modal--active");
  body.style.overflow = "auto";
})

var selectPlace = document.querySelector(".select-modal--place");
var selectPlaceOpen = document.querySelector(".actions__place");
var selectPlaceClose = selectPlace.querySelector(".select-modal__exit");

selectPlaceOpen.addEventListener("click", function(event) {
  event.preventDefault();
  selectPlace.classList.add("select-modal--active");
  body.style.overflow = "hidden";
})

selectPlaceClose.addEventListener("click", function(event) {
  event.preventDefault();
  selectPlace.classList.remove("select-modal--active");
  body.style.overflow = "auto";
})

/*select dropdown*/

var dropDownLang = document.querySelector(".select-lang__value");
var dropDownLangList = document.querySelector(".select-lang__list");
var dropDownPlace = document.querySelector(".select-place__value");
var dropDownPlaceList = document.querySelector(".select-place__list");

dropDownLang.addEventListener("click", function(event) {
  event.preventDefault();
  dropDownLangList.classList.toggle("select-lang__list--active")
})
dropDownPlace.addEventListener("click", function(event) {
  event.preventDefault();
  dropDownPlaceList.classList.toggle("select-place__list--active")
})


var  auto_grow = function(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}

var text_area = document.querySelector(".form__text-input--big");

text_area.onchange = auto_grow( text_area );
auto_grow( text_area );
window.onresize = auto_grow( text_area );

