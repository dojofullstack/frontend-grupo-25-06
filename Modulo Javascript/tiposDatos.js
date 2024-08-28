

// tipos de datos

// Tipo de dato String

let username = "henry coder dev";

let email = "henry@gmail.com";

console.log( typeof username );


console.log(username.length);

console.log(username.concat(" full stack") );

console.log(username.includes("coder") );
console.log(username.includes("backend") );

console.log(username.indexOf("coder") );
console.log(username.indexOf("frontend") );

console.log(username.replace("erick", "Pedro") );
console.log(username.replace("erick", "Pedro").replace("henry", "Coder") );


console.log(username.search("henry") );

console.log(username.startsWith("hen") );
console.log(username.endsWith("coder") );



console.log(username.split(" ")  );

console.log(email.split("@")  );



// Tipo de dato Bool
const isAdmin = true;
let isUserVip = false;

console.log(isAdmin, isUserVip);

console.log(isUserVip)


// Tipo de dato NUmericos, Float

let puntaje = 123;
let precio = 9.599;

console.log( typeof puntaje );
console.log( typeof precio );

console.log(puntaje );
console.log(precio );

console.log(precio.toFixed("1"))
parseFloat("9.34");
parseInt("123");
Number("12345");


// puntaje = puntaje + 12;
puntaje += 1;
console.log(puntaje);


resta = puntaje - 12;
mutilplica = puntaje * 12;
division = puntaje / 12;


// Tipo de dato Array o arreglos

// const seriesNetflix = [
//     "simpspmons", "Batman", "Vikingos", "SuperMan", 123, true, ["otro elemtos", "otros"]
// ];

const seriesNetflix = [
    "simpspmons", "Batman", "Vikingos", "SuperMan"
];

console.log(seriesNetflix);

seriesNetflix.push("Hulk");

console.log(seriesNetflix);

seriesNetflix.pop();

console.log(seriesNetflix);
 
console.log(seriesNetflix[0] ) ;
console.log(seriesNetflix[1] ) ;
console.log(seriesNetflix[2] ) ;

seriesNetflix[0] = "Simpsons Temporada 3";
seriesNetflix[2] = "Vikingos Temporada 1";

seriesNetflix[3] = null;


console.log(seriesNetflix.length);

console.log(seriesNetflix);


console.log(seriesNetflix.includes("Batman")  );


// Tipo de dato Objetos
// null y undefined


const auto = {
        color: "verde",
        precio: 123,
        mdoelo: "totyota"
}