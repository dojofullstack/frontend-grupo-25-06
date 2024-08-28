



const array = [
    "naranjas", "fresas", "peras", "banana"
]


// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     if (element === "fresas"){
//         console.log("las fresas se agotaron!");
//     } else if (element === "naranjas"){
//         console.log("preparando jugo de naranjas!");
//     }
// }


for (const iterator of array) {
    console.log(iterator);
    // console.log(array.indexOf(iterator));
}






// ciclo while

const auto = {
    color: "verde",
    precio: 123,
    modelo: "toyota",
    autoNuevo: true,
}

console.log(auto.autoNuevo);
console.log(auto.modelo);


let pasos = 0;


while (auto.autoNuevo) {

    if (pasos === 2){
        pasos += 1;
        continue;
    }

    console.log("continuar iteador!!!".concat(pasos));
    alert("continuar iteador!!!".concat(pasos));

    // auto.autoNuevo = false;

    // pasos++;
    pasos += 1;

    if (pasos === 5){
        break;
    }


}