document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const dropdown_menu = document.querySelector(".dropdown_menu");

    menuToggle.addEventListener("click", function () {
      dropdown_menu.classList.toggle("active");
    });
  });