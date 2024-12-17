window.addEventListener('scroll', function() {
    const items = document.querySelectorAll('.item');
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    items.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top + scrollPosition;

        if (itemPosition < (scrollPosition + windowHeight) && !item.classList.contains('visible')) {
            item.classList.add('visible');
        }
    });
});