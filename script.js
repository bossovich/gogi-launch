// ===============================
//  GOGI Launchpad – script.js
// ===============================

// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Floating animation re-trigger (in case image reloads)
const gogiHero = document.querySelector(".hero-gogi");
if (gogiHero) {
    gogiHero.style.animation = "none";
    setTimeout(() => {
        gogiHero.style.animation = "";
    }, 10);
}

// Add hover glow on buttons
const primaryButtons = document.querySelectorAll(".btn.primary");
primaryButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.boxShadow = "0 0 18px rgba(255, 215, 0, 0.6)";
        btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.boxShadow = "none";
        btn.style.transform = "scale(1.0)";
    });
});

// Navbar logo mini animation on hover
const navLogo = document.querySelector(".nav-logo");
if (navLogo) {
    navLogo.addEventListener("mouseenter", () => {
        navLogo.style.transform = "scale(1.15)";
        navLogo.style.transition = "0.2s ease";
    });
    navLogo.addEventListener("mouseleave", () => {
        navLogo.style.transform = "scale(1.0)";
    });
}

// Token cards hover animation
const tokenCards = document.querySelectorAll(".token-card");
tokenCards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-6px)";
        card.style.transition = "0.2s";
        card.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0px)";
        card.style.boxShadow = "none";
    });
});

// Debug message
console.log("GOGI Launchpad script loaded successfully.");
