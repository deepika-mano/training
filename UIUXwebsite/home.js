var count = 89;
function counter() {
  count++;
  document.getElementById("count").innerHTML = count;
}
function changeimg() {
  var image = document.querySelector(".c1 img");
  image.style.width = "330px";
  image.style.height = "270px";
}
function changeback() {
  var image = document.querySelector(".c1 img");
  image.style.width = "300px";
  image.style.height = "250px";
}
