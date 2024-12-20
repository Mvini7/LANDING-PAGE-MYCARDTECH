const menuToggle = document.getElementById('menu-toggle');
const menuLinks = document.getElementById('menu-links');
const links = menuLinks.getElementsByTagName('a');

// Função para abrir ou fechar o menu
menuToggle.addEventListener('click', () => {
  menuLinks.classList.toggle('active');
});

// Adicionando o evento de clique para rolar suavemente e fechar o menu
for (let link of links) {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const targetClass = link.getAttribute('href').substring(1); // Remove o ponto do início
    const targetSection = document.querySelector(`.${targetClass}`);

    // Rolagem suave para a seção
    window.scrollTo({
      top: targetSection.offsetTop - 20, // Ajuste para ficar um pouco acima da seção
      behavior: 'smooth'
    });

    // Fechar o menu após clicar no link
    menuLinks.classList.remove('active');
  });
}