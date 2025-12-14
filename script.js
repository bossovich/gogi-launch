const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");

loginBtn.onclick = () => {
  loginModal.style.display = "flex";
};

loginModal.onclick = (e) => {
  if (e.target === loginModal) {
    loginModal.style.display = "none";
  }
};

document.querySelector(".close").onclick = () => {
  loginModal.style.display = "none";
};
