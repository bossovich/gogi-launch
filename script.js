const sidebar = document.getElementById("sidebar");
const page = document.getElementById("page");
const toggle = document.getElementById("toggleSidebar");

toggle.onclick = () => {
  sidebar.classList.toggle("open");
  page.classList.toggle("shrink");
};
