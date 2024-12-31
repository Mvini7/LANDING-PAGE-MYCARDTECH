document.querySelectorAll('header li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Rolagem suave
        });
    });
});

document.querySelectorAll('.linkSobreFooter a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Rolagem suave
        });
    });
});

const produtosBtn = document.getElementById("produtos");
const duvidasBtn = document.getElementById("duvidas");

    // Função para rolar suavemente até a seção com o ID fornecido
function rolarParaSecao(id) {
    const secao = document.getElementById(id);
    secao.scrollIntoView({
        behavior: "smooth" // Rolagem suave
    });
}

// Adicionando eventos de clique aos botões
produtosBtn.addEventListener("click", function() {
    rolarParaSecao("produtos-section");
});

duvidasBtn.addEventListener("click", function() {
    rolarParaSecao("duvidas-section");
});