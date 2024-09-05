


// iteradores forEach y Map


const PRODUCTOS = [
    "TABLETA", "IPHONE", "RELOJ"
]


const verificarStock = (producto, index) => {

    console.log("vericando si hay stock del producto...", producto, index);

    if (producto === "RELOJ"){
        console.log("no hay stock para relojes");
        return "no hay stock";
    }

    return "si hay stock";

}






// iterador forEach
// const salidaIterador =  PRODUCTOS.forEach(verificarStock);
// console.log(salidaIterador);


const salidaIterador =  PRODUCTOS.map(verificarStock);
console.log(salidaIterador);
