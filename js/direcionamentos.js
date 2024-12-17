document.querySelectorAll('header li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Rolagem suave
        });
    });
});