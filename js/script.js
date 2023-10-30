let bars = document.getElementById("bars");
let bottom = document.querySelector(".header__bottom");
bars.onclick = () => {
  bottom.classList.toggle("active");
};
window.onscroll = () => {
  bottom.classList.remove("active");
};
