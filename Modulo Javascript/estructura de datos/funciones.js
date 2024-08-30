


// funcion

console.log("modulo funciones");




function maquinaDeNaranjas(numero_naranjas, contiene_azucar, precio="1 dolar"){

    console.log(numero_naranjas);

    if (numero_naranjas >= 10){
        console.log("no hay suficientes naranjas...");
        // return "salida del programa";
        return false;
    }

    console.log(`precio ${precio}`);

    console.log("preparando jugo de naranjas...");


    if (contiene_azucar){
        console.log("agregar azucar!");
            document.querySelector("#face-elonmusk").src = "https://upload.wikimedia.org/wikipedia/commons/1/12/Elon_Musk_in_2023_%28cropped%29.jpg";
        return "jugo listo con azucar!!!"
    }



    console.log("No agregar azucar!");
    return "jugo listo sin azucara!!!"
}





const salidaMaquina =  maquinaDeNaranjas(3, true, precio="3 dolares");

console.log(salidaMaquina);