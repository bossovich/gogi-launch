const sidebar = document.getElementById("sidebar");
const backdrop = document.getElementById("sidebarBackdrop");

document.getElementById("openSidebar").onclick = () => {
    sidebar.style.left = "0";
    backdrop.style.display = "block";
};

document.getElementById("closeSidebar").onclick = () => {
    sidebar.style.left = "-320px";
    backdrop.style.display = "none";
};

backdrop.onclick = () => {
    sidebar.style.left = "-320px";
    backdrop.style.display = "none";
};
