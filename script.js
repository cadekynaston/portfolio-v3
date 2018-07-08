
// navigation
let toggleNav = () => {
  const overlay = document.querySelector(".nav-overlay");
  overlay.classList.toggle('hidden');

  const menuButton = document.querySelector(".menu-button");
  menuButton.classList.toggle('active');

  const navBody = document.querySelector(".nav-body");
  navBody.classList.toggle('collapsed');

  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle('fade-in');
}

document.querySelector(".nav-overlay").addEventListener("click", toggleNav);
document.querySelector(".menu-button").addEventListener("click", toggleNav);
