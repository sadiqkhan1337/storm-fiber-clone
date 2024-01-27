const menuIcon = document.querySelector("#menu-btn")
const mobileMenu = document.querySelector(".mobile__menu-list")

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("show__menu")
})