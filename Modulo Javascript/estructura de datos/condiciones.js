

let emailChecked = true;
let isAdmin = false;
let usuario = "pedro@gmail.com";
// let usuario = "erick@gmail.com";
const stack = [
    "python", "golang", "javascript"
]

// if (usuario.includes("erick@")) {
//     alert("el usuario ya existe!");
// } else {
//     alert("puedes crear tu cuenta.");
// }


// if (stack.length > 2){
//     console.log("Developer!")
// }

// if (stack[0] === "python"){
//     console.log("Python master!!")
// ;}



// if (emailChecked || isAdmin ){
//     console.log("el usuario tiene acceso!");
// }

// if (emailChecked && isAdmin) {
//     console.log("el usuario tiene acceso al sistema!");
// } else {
//     console.log("el usuario tiene acceso solo como invitado!");
// }




// condiciones multiples o anidadas

const stackFavorito = ["python", "react", "aws"]




if (emailChecked && isAdmin) {
    console.log("el usuario tiene acceso al sistema!");
} else if (emailChecked && stackFavorito.length === 3) {
    console.log("full stack en accion!")   
} else if (stackFavorito.length >= 10) {
    console.log("full stack RockStaet!!")   
} else if (stackFavorito.includes("react") ) {
    console.log("sabes sobre PWA");
} else {
    console.log("el usuario es invitado!");
}
