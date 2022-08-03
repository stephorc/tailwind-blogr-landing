const hamMenu = document.getElementById('burger');
const hamMenuItems = document.getElementById('ham-menu-items');

hamMenu.addEventListener('click', () => {
  hamMenu.classList.add('active');
  hamMenuItems.classList.add('active');
});