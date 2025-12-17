const sidebar = document.getElementById("sidebar");
const main = document.getElementById("main");
const toggle = document.getElementById("toggleSidebar");
const why = document.querySelector(".why");
const hinkali = document.querySelector(".hero-right img");

toggle.onclick = () => {
  sidebar.classList.toggle("open");
  sidebar.classList.toggle("collapsed");
  main.style.transform = sidebar.classList.contains("open")
    ? "scale(.95) translateX(120px)"
    : "none";
};

why.onclick = () => {
  hinkali.style.transform = "translateX(-14px) scale(1.03)";
  setTimeout(()=>hinkali.style.transform="",420);
};
