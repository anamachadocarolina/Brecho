

const listIcon = document.querySelector(".list")
const menuMobile = document.querySelector(".menu-container")
const wrapper = document.querySelector(".wrapper")

listIcon.addEventListener("click", () => {
    menuMobile.classList.remove("hidden")
    menuMobile.classList.add("slide-in")
})

wrapper.addEventListener("click", () => {
    menuMobile.classList.remove("slide-in");
    menuMobile.classList.add("slide-out");
    setTimeout(() => {
      menuMobile.classList.add("hidden");
      menuMobile.classList.remove("slide-out");
    }, 500);
})