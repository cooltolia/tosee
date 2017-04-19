/*sidebar toggle*/

var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".sidebar__toggle");

hamburger.addEventListener("click", function(event) {
  event.preventDefault();
  sidebar.classList.toggle("sidebar--open");
  hamburger.classList.toggle("sidebar__toggle--close");
});
