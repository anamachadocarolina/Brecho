
const containersNodeList = document.querySelectorAll(".products-container")
const containersArr = Array.prototype.slice.call(containersNodeList)

containersArr.map(container => {
    for(let i = 0; i < 4; i++){
        container.innerHTML += `
        <div class="product">
            <img src="../../images/vestido.png" />
            <div class="product-infos">
                <span class="title">Vestido Florido</span>
                <span class="price">R$ 10,00</span>
                <span class="installment">2x de R$ 5,00</span>
            </div>
        </div>
     `
    }
})

