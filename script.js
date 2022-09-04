const toggle = document.getElementById("toggle");
const sideBar = document.getElementById("sideBar");

document.onclick = (e) => {
  if (e.target.id !== "sideBar" && e.target.id !== "toggle") {
    toggle.classList.remove("active");
    sideBar.classList.remove("active");
  }
};

toggle.onclick = function () {
  toggle.classList.toggle("active");
  sideBar.classList.toggle("active");
};
