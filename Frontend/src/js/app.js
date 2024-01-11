var burgerIcon = document.querySelector('#burger');
var navbarMenu = document.querySelector('#nav-links');
if (burgerIcon && navbarMenu) {
    burgerIcon.addEventListener('click', function () {
        navbarMenu.classList.toggle('hidden');
    });
    // Add event listener to window resize
    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            navbarMenu.classList.remove('hidden');
        }
    });
}
