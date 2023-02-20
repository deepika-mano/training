const colors = document.querySelectorAll(".box h2");
function gencolors() {
  colors.forEach((color) => {
    let hexCode = "#" + Math.random().toString(16).substring(2, 8);
    color.style.backgroundColor = hexCode;
    color.innerHTML = hexCode;
  });
}
