function toggleMenu() {
    const nav = document.getElementById('hamburgerNav');
    nav.classList.toggle('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.getElementById('hamburgerNav');

    if (!hamburgerMenu.contains(event.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
    }
});

// Close menu when clicking a link
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.hamburger-nav a').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('hamburgerNav').classList.remove('active');
        });
    });
});
