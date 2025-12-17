/* SEARCH */
const searchIcon = document.querySelector(".search-icon");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");

searchIcon.addEventListener("click", () => {
  searchBar.classList.add("active");
});

closeSearch.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

/* HINKALI LOOK + POINT */
const whyBtn = document.querySelector(".nav-btn.why");
const hinkali = document.querySelector(".hero-hinkali");
const indicator = document.querySelector(".point-indicator");

if (whyBtn) {
  whyBtn.addEventListener("mouseenter", () => {
    hinkali.style.transform = "rotate(-6deg) translateX(-12px)";
    indicator.style.opacity = "1";
  });

  whyBtn.addEventListener("mouseleave", () => {
    hinkali.style.transform = "none";
    indicator.style.opacity = "0";
  });

  /* CINEMATIC CLICK */
  whyBtn.addEventListener("click", e => {
    e.preventDefault();
    document.body.style.pointerEvents = "none";
    setTimeout(() => {
      window.location.href = "why-us.html";
    }, 200);
  });
}
