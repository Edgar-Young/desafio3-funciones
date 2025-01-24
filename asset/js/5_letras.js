let colorSeleccionado = "";

const squareDiv = document.getElementById("square");

document.addEventListener("keydown", (event) => {
  if (event.key === "a") {
    colorSeleccionado = "pink";
    squareDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "s") {
    colorSeleccionado = "orange";
    squareDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "d") {
    colorSeleccionado = "lightblue";
    squareDiv.style.backgroundColor = colorSeleccionado;
  } else if (event.key === "q") {
    crearNuevoDiv("purple");
  } else if (event.key === "w") {
    crearNuevoDiv("gray");
  } else if (event.key === "e") {
    crearNuevoDiv("brown");
  }
});

function crearNuevoDiv(color) {
  const nuevoDiv = document.createElement("div");
  nuevoDiv.classList.add("color-div");
  nuevoDiv.style.backgroundColor = color;
  document.body.appendChild(nuevoDiv);
}
