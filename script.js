const menuBtn = document.querySelector(".menu-btn")
const navbar = document.querySelector(".navbar .links")
const navbarLinks = document.querySelectorAll(".navbar .links li")

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active")
})
navbarLinks.forEach(link => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active")
  })
})