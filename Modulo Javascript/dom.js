


console.log("practiando con el DOM");

// forma querySelector
const BotonComprar = document.querySelector("#comprar");

console.log(BotonComprar);

BotonComprar.style.color = "orange";

BotonComprar.style.backgroundColor = "black";

BotonComprar.style.padding = "5px 50px";

BotonComprar.style.marginTop = "30px";



// const BotonRemove = document.querySelector(".btn-danger");
const BotonRemove = document.querySelectorAll(".btn-danger");

console.log(BotonRemove);



// forma con el metodo getElementBy

 
const BTN = document.getElementById("comprar");
console.log(BTN);

const BtnDelete = document.getElementsByClassName("btn-danger");

console.log(BtnDelete);
