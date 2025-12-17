const sidebar = document.getElementById("sidebar");
const burger = document.getElementById("burger");

burger.onclick = () => {
  sidebar.classList.toggle("collapsed");
};
