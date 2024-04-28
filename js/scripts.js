// inject current year in footer
const numberOne = new Date();
document.querySelector('#year').textContent = numberOne.getFullYear();

function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;