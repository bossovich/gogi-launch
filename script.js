const sidebar = document.getElementById("sidebar");
const btn = document.getElementById("toggleSidebar");

btn.onclick = () => {
  sidebar.classList.toggle("collapsed");
};
