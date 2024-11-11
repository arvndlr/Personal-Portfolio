document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const dropdownMenu = document.querySelector(".dropdown_menu");

  menuToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("active");
  });
  
});