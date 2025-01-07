const checkout2 = document.getElementById('checkout2')

checkout2.addEventListener('click', function() {
        window.location.href = 'https://mycardtech.pay.yampi.com.br/r/CI0N2UZY4H'
})

const checkout3 = document.getElementById('checkout3')

checkout3.addEventListener('click', function() {
        window.location.href = 'https://mycardtech.pay.yampi.com.br/r/EAUSNQJMFY'
})

function changeColor(color) {
        const productImage = document.getElementById("product-image");
        const checkoutLink = document.getElementById("checkout-link");

        // Remover a borda de todas as cores
        document.getElementById("color-black").classList.remove("selected");
        document.getElementById("color-blue").classList.remove("selected");
        document.getElementById("color-red").classList.remove("selected");

        // Adicionar a borda preta à cor selecionada
        document.getElementById(`color-${color}`).classList.add("selected");

        if (color === 'black') {
                productImage.src = "./img/card-preto.png";
                checkoutLink.href = "https://mycardtech.pay.yampi.com.br/r/AWGWNRU2U9";
        } else if (color === 'blue') {
                productImage.src = "./img/card-azul.png";
                checkoutLink.href = "https://mycardtech.pay.yampi.com.br/r/EKTNYO5IIH";
        } else if (color === 'red') {
                productImage.src = "./img/card-vermelho.png";
                checkoutLink.href = "https://mycardtech.pay.yampi.com.br/r/DSZDITEK3K";
        }
}