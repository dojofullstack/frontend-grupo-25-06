


// function saludar(){
//     console.log("hi!");
// }



// const saludar = function () {
//     console.log("hi!");
// }



// funcion arrow function
const saludar = () => {
    console.log("hi!");
}

saludar();



const generarPago = (monto, title_product) => {
    return `Generando link de pago del prducto ${title_product} precio ${monto} usd `;
}




console.log(generarPago(35, "camiseta deportiva"));