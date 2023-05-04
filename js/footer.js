class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer id="footer-container">
      <img class="logo-footer" src="../../images/logo-footer.png" alt="Logo" />
      <div class="footer-options">
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
      <a class="physical-store">
            <i class="ph-fill ph-storefront"></i>
            <p>Loja Física</p>
          </a>
  </footer> 
  `
  }
}


customElements.define('main-footer', Footer)