

function insertarImagenElonMusk(){
    console.log("insertando nueva imagen!");
    document.querySelector("#face-elonmusk").src = "https://tec.com.pe/wp-content/uploads/2022/05/20201124-Elon-Musk-Tesla-01.jpg";
}


function showUsername(key){

    if (key.code === "Enter"){
        console.log("buscando usuario");
        document.querySelector("#face-elonmusk").src = "https://fotografias.lasexta.com/clipping/cmsimages02/2022/05/03/6F9C82A4-0FA4-40F9-BE2F-87F8DBBC1224/elon-musk-met-gala_69.jpg?crop=1407,791,x0,y150&width=1280&height=720&optimize=low&format=jpg";
    }
    const username =  usernameInput.value;
    console.log("username", username);
}



const comprarBtn = document.querySelector("#comprar");

const usernameInput =  document.querySelector("#username");





comprarBtn.addEventListener("click", insertarImagenElonMusk );

usernameInput.addEventListener("keydown", showUsername);