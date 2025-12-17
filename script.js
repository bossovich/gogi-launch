const sidebar = document.querySelector('.sidebar');
const toggle = document.getElementById('toggleSidebar');

toggle.onclick = () => {
  sidebar.classList.toggle('open');
};
