// Menú hamburguesa
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (toggle && navLinks) {
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}
const dropbtn = document.querySelector(".dropbtn");
const dropdownContent = document.querySelector(".dropdown-content");

if (dropbtn && dropdownContent) {
  dropbtn.addEventListener("click", (e) => {
    e.stopPropagation();
    dropdownContent.classList.toggle("show-dropdown");
  });
  window.addEventListener("click", (e) => {
    if (!dropdownContent.contains(e.target) && !dropbtn.contains(e.target)) {
      dropdownContent.classList.remove("show-dropdown");
    }
  });
}
