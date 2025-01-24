function pintar(color) {
  ele.style.backgroundColor = color;
}

const ele = document.querySelector("#ele1");
pintar("green");

ele.addEventListener("click", () => {
  pintar("yellow");
});
