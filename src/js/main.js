const openAlert = () => {
  const alert = document.querySelector(".message");
  const overlay = document.querySelector(".overlay");

  alert.style.display = "flex";
  overlay.style.display = "block";
};

document.addEventListener("keypress", (e) => {
  if (e.code === 'Space') {
    openAlert();
  }
})