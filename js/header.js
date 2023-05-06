class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
       
  <div class="menu-container hidden">
  <ul class="mobile-menu">
      <li>Tudo</li>
      <li>Moda Feminina</li>
      <li>Moda Masculina</li>
      <li>Infantil</li>
  </ul>
    <div class="wrapper"> 
    </div>
</div>
  `
  }
}


customElements.define('main-header', Header)


const listIcon = document.querySelector(".list")
const menuMobile = document.querySelector(".menu-container")
const wrapper = document.querySelector(".wrapper")

console.log(listIcon)

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