/* SEARCH */
const searchIcons = document.querySelectorAll(".search-icon");
const searchBar = document.getElementById("searchBar");
const closeSearch = document.getElementById("closeSearch");
const searchInput = searchBar.querySelector("input");

searchIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    searchBar.classList.add("active");
    setTimeout(() => searchInput.focus(), 200);
  });
});

closeSearch.addEventListener("click", () => {
  searchBar.classList.remove("active");
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") {
    searchBar.classList.remove("active");
  }
});

/* HINKALI LOOK AT WHY */
const whyBtn = document.querySelector(".nav-btn.why");
const hinkali = document.querySelector(".hero-hinkali");
const indicator = document.querySelector(".point-indicator");

if (whyBtn && hinkali && indicator) {
  whyBtn.addEventListener("mouseenter", () => {
    hinkali.classList.add("look-why");
    indicator.classList.add("active");
  });

  whyBtn.addEventListener("mouseleave", () => {
    hinkali.classList.remove("look-why");
    indicator.classList.remove("active");
  });
}

/* CLICK FREEZE + CINEMATIC */
if (whyBtn) {
  const flash = document.createElement("div");
  flash.className = "screen-flash";
  document.body.appendChild(flash);

  whyBtn.addEventListener("click", e => {
    e.preventDefault();
    document.body.classList.add("freeze");
    flash.classList.add("active");

    setTimeout(() => {
      window.location.href = whyBtn.getAttribute("href");
    }, 200);
  });
}
