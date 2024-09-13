

console.log("loaded module auth.js");





const loginAuth = () => {


    const usuario = document.querySelector("#inputEmail").value;
    const pwd = document.querySelector("#inputPassword").value;

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: usuario,
          password: pwd,
        }),
      })
      .then(
        (respuesta) => {
            return respuesta.json();
        }
      )
      .then( (respuesta) => {
    


        if (respuesta.token !== null){
            myToast.show();
            
            console.log(respuesta.token);
            const token = respuesta.token;
            const fechaActual = new Date();
            const minutes = 60;
            fechaActual.setTime(fechaActual.getTime() + minutes *60*1000);
            document.cookie = `token=${token}; expires=${fechaActual.toUTCString()}`;


            document.location.href = "/";
            

        }


        if (respuesta.message === "Invalid credentials"){
            alert("Credenciales Incorrectas!");
        }


      }
      )
      .catch((error) => {
        console.log("la peticion ha fallado!");
      })

      

}




const cookiesPracticas = () => {

    console.log(document.cookie);

    document.cookie = "token=83827837287382";
    document.cookie = "tokenRefres=9999999";

    const fechaActual = new Date();

    // console.log(fechaActual.getTime() + 5*60*1000 );

    const minutes = 60;

    fechaActual.setTime(fechaActual.getTime() + minutes *60*1000);

    // console.log(fechaActual);


    // document.cookie = "useId=useranonymous01001";
    
    document.cookie = `useId=useranonymous01001; expires=${fechaActual.toUTCString()}`;

}



// cookiesPracticas();