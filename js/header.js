class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header id="header-container">
      <img class="logo" src="../../images/logo.png" alt="Logo" />
      <div class="header-options">
          <div class="address">
              <i class="ph-fill ph-map-pin" style="color: #534EF3"></i>
             <address> Av. Edu Vieira, 000 - Blumenau - SC</address>
          </div>
          <div>
              <i class="ph-fill ph-whatsapp-logo" style="color: #19CC09"></i>
              <text>91 9000-0000</text>
          </div>
          <a src="#faqs">
              <i class="ph-fill ph-question" style="color: #534EF3"></i>
              <p>Perguntas Frequentes</p>
          </a>
      </div>
      <i class="ph-bold ph-list list"></i>
  </header>
  <section>
            <div>
                <div class="main-title">
                    <h1 class="secondary-gray">Brechó Flor de Maria</h1>
                    <img src="../../images/island.png" />
                </div>
                <text class="sub-title main-purple">Moda que cabe no bolso</text>
            </div>
            <div class="search">
                <input placeholder="Encontre o que você procura" />
                <i class="ph-bold ph-magnifying-glass" style="color: white; font-size:20px"></i>
            </div>
        </section>
        <ul class="menu">
        <li>Tudo</li>
        <li>Moda Feminina</li>
        <li>Moda Masculina</li>
        <li>Infantil</li>
    </ul> 
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