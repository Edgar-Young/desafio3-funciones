function pintarDivs(parm1) {
  parm1.style.backgroundColor = "black";
}

const div1 = document.querySelector("#div-1");
const div2 = document.querySelector("#div-2");
const div3 = document.querySelector("#div-3");
const div4 = document.querySelector("#div-4");

div1.addEventListener("click", () => {
  pintarDivs(div1);
});
div2.addEventListener("click", () => {
  pintarDivs(div2);
});
div3.addEventListener("click", () => {
  pintarDivs(div3);
});
div4.addEventListener("click", () => {
  pintarDivs(div4);
});
