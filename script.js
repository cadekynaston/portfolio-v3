
document.querySelector(".menu-button").addEventListener("click", () => {

  const overlay = document.querySelector(".nav-overlay");
  overlay.classList.toggle('hidden');

  const menuButton = document.querySelector(".menu-button");
  menuButton.classList.toggle('active');

  const navBody = document.querySelector(".nav-body");
  navBody.classList.toggle('collapsed');

});

