// Update the footer year automatically.
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Add a subtle shadow to the navigation bar after scrolling.
const navbar = document.querySelector('.navbar');
const updateNavbar = () => navbar.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', updateNavbar, { passive: true });
updateNavbar();

// Close the mobile navigation after a section link is selected.
document.querySelectorAll('.navbar .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.querySelector('.navbar-collapse');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
