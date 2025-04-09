const menuToggle = document.getElementById('menuToggle');
const navBarMovil = document.getElementById('NavBarMovil');

menuToggle.addEventListener('click', function() {
    event.preventDefault();
    navBarMovil.classList.toggle('show');
});