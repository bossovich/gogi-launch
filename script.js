// SIDEBAR TOGGLE
const openSidebar = document.getElementById("openSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");

if (openSidebar && sidebar && overlay) {
  openSidebar.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("show");
  });

  overlay.addEventListener("click", () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("show");
  });
}
/* WHY US CLICK EFFECT */
.hero.freeze {
  pointer-events: none;
}

.hero-right img {
  transition: transform 0.6s cubic-bezier(.22,.9,.3,1),
              filter 0.6s ease;
}

.hero-right img.battle {
  transform: translateX(-40px) scale(1.08);
  filter: drop-shadow(0 0 50px rgba(120,190,255,0.95));
}
// WHY US CINEMATIC EFFECT
const whyBtn = document.querySelector(".actions .why");
const hero = document.querySelector(".hero");
const hinkali = document.querySelector(".hero-right img");

if (whyBtn && hero && hinkali) {
  whyBtn.addEventListener("click", () => {

    // freeze moment
    hero.classList.add("freeze");

    // hinkali reaction
    hinkali.classList.add("battle");

    // release after short time
    setTimeout(() => {
      hero.classList.remove("freeze");
    }, 200);

    // aici, mai târziu, putem face redirect:
    // setTimeout(() => window.location.href = "why.html", 600);
  });
}
