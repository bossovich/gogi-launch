// Sidebar animation (logo -> text)
document.querySelector(".sidebar").addEventListener("mouseover", () => {
    document.getElementById("logoText").style.display = "block";
});

document.querySelector(".sidebar").addEventListener("mouseout", () => {
    document.getElementById("logoText").style.display = "none";
});
