const burgerIcon: HTMLElement | null = document.querySelector('#burger');
const navbarMenu: HTMLElement | null = document.querySelector('#nav-links');

if (burgerIcon && navbarMenu) {
  burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('hidden');
  });

  // Add event listener to window resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024) {
      navbarMenu.classList.remove('hidden');
    }
  });
}