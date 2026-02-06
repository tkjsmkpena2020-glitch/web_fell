// MENU MOBILE
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle.onclick = () => nav.classList.toggle("open");

// SKILL BAR
window.addEventListener("load", () => {
  document.querySelectorAll(".bar").forEach(bar => {
    bar.querySelector("span").style.width = bar.dataset.value + "%";
  });
});

// PORTFOLIO MODAL
const lightbox = document.getElementById("lightbox");
const lbTitle = document.getElementById("lbTitle");
const lbDesc = document.getElementById("lbDesc");

document.querySelectorAll(".project").forEach(card => {
  card.onclick = () => {
    lbTitle.textContent = card.dataset.title;
    lbDesc.textContent = card.dataset.desc;
    lightbox.hidden = false;
  };
});

document.getElementById("lbClose").onclick = () => lightbox.hidden = true;
