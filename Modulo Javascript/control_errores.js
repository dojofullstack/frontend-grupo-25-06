
// console.log(email);



try {

    // console.log(email);

    axios.post('https://dummyjson.com/user/login', {
        username: 'emilys',
        password: 'emilyspass',
    })
    
} catch (e) {
    
    if (String(e).includes("axios is not defined")){

        fetch('https://dummyjson.com/user/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: 'emilys',
              password: 'emilyspass',
              expiresInMins: 30, // optional, defaults to 60
            })
          })
          .then(res => res.json())
          .then(console.log);
    }

} finally {
    console.log("eliminar ficheros al finalizar flujo");
}





console.log("final del modulo");