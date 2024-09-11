

console.log("loaded app.js");

const PRODUCTOS = [];


const createProduct = () => {

    console.log("Creando producto.....");
    
   const titleProduct =   document.querySelector("#title-product");
   const descriptionProduct =  document.querySelector("#description-product");
   const imgProduct =  document.querySelector("#img-product");
   const priceProduct =  document.querySelector("#price-product");

   const PRODUCT = {
            id: uuid.v4(),
            titleProduct: titleProduct.value,
            descriptionProduct: descriptionProduct.value,
            imgProduct: imgProduct.value,
            priceProduct: priceProduct.value
   };

   console.log(PRODUCT);

   return PRODUCT;

}



const clearForm = () => {

    const formProduct =   document.querySelector("#form-product");
    formProduct.reset();

    myModalProduct.hide();
    console.log("formulario limpiio");
}



const generarCardHTML = (producto, index) => {

    return  `
    <div class="col-12 col-md-3" >
            <div class="card" key="${index}" >
                    <img class="card-img-top" src="${producto.imgProduct}" alt="Title" />
                    <div class="card-body">
                        <h4 class="card-title text-info">${producto.titleProduct}</h4>
                        <p class="card-text">detalles</p>
                        <h5 class="text-success">Precio: ${producto.priceProduct}</h5>
                            <a target="_blank" href="https://wa.me/51935489552">
                                <button
                                type="button"
                                class="btn btn-outline-primary"
                            >
                                Contactar al vendedor
                            </button>
                            </a>


                            <i onclick=" deleteProduct('${producto.id}') " class="btn bi bi-trash fs-4 text-danger mx-2"></i>

                            
                    </div>
                </div>
      </div>
    `
}


const showProductFrontend = () => {


    const salidaCardsProducts = PRODUCTOS.map( generarCardHTML );

    // console.log(salidaCardsProducts);
    // console.log( salidaCardsProducts.join(""));
    document.querySelector("#catalogo-wasap").innerHTML = salidaCardsProducts.join("");
}



const showProductFrontendBuscador = (productosBusqueda) => {

    const salidaCardsProducts = productosBusqueda.map( generarCardHTML );

    // console.log(salidaCardsProducts);
    // console.log( salidaCardsProducts.join(""));
    document.querySelector("#catalogo-wasap").innerHTML = salidaCardsProducts.join("");
}




const modalProduct = () => {

    const product = createProduct();

    PRODUCTOS.push(product);

    console.log(PRODUCTOS);

    saveProduct();



    clearForm();


    showProductFrontend();


}




const saveProduct = () => {

    const jsonProducts = JSON.stringify(PRODUCTOS);
    localStorage.setItem("productos", jsonProducts);


    // localStorage.clear()
    // localStorage.getItem("NRBA_SESSION");
    // localStorage.setItem("NRBA_SESSION", "");

    // localStorage.removeItem("NRBA_SESSION");

    
    // console.log(localStorage);

    // const tienda = {
    //     nombre: "DojoTiendaCamisetas",
    //     slogan: "camisetas full stack",
    //     logoTienda: "https://..."
    // }


    // const productos = [
    //     {
    //         id: 12,
    //         title: "tablet",
    //         prirce: 123,
    //         isStock: false
    //     },
    //     {
    //         id: 3,
    //         title: "phone",
    //         prirce: 99,
    //         isStock: true
    //     },

    // ]


    // JSON.stringify();
    // JSON.parse();

    // localStorage.setItem("tienda", JSON.stringify(tienda) );
    // localStorage.setItem("productos", JSON.stringify(productos) );


    // const datosTienda = localStorage.getItem("tienda");

    // const data = JSON.parse(datosTienda);

    // console.log(data);

    // localStorage.removeItem("tienda");

    // localStorage.clear();
    

}



const loadProducts = () => {

    const productos =  JSON.parse( localStorage.getItem("productos") );


    if (productos !== null){
        // console.log(productos);

        productos.forEach(item => {
            // item.id = uuid.v4()
            PRODUCTOS.push(item);
        });


        showProductFrontend();

        console.log(PRODUCTOS);
        // saveProduct();

    }




}



const buscarProducto = () => {

    const busqueda = document.querySelector("#input-search").value;
    console.log("busqueda", busqueda);


    // implenentar find o filter
    const resultadoBusqueda =  PRODUCTOS.filter( (item) => {

        if (item.titleProduct.includes(busqueda)){
            return true;
        }
    } )


    console.log(resultadoBusqueda);

    showProductFrontendBuscador(resultadoBusqueda);

}




const deleteProduct = (productId) => {
    console.log("eliminando product....", productId);

    // PRODUCTOS.filter( item  => item.id !== productId )

    // const productosUpdate = PRODUCTOS.filter( (item)  => {
    //     if (item.id !== productId){
    //         return true
    //     }
    // })

    PRODUCTOS.forEach((item, index) => {

        if (item.id === productId){
            delete PRODUCTOS[index];

            // logica para editar el elemento
            // PRODUCTOS[index] = itemUpdate
        }

    })

    // console.log(PRODUCTOS);

    showProductFrontend();

}




const editProduct = (productId, itemUpdated) => {
    console.log("updated product....", productId);


    PRODUCTOS.forEach((item, index) => {

        if (item.id === productId){
            // logica para editar el elemento
            PRODUCTOS[index] = itemUpdated;
        }

    })

    // console.log(PRODUCTOS);
    showProductFrontend();

}


// ejecutar siempre al cargar la app
loadProducts();


// editProduct("c291de55-8c6c-48fe-b211-7dd232620d3d",  {
//     "id": "c291de55-8c6c-48fe-b211-7dd232620d3d",
//     "titleProduct": "tablet actualizado",
//     "descriptionProduct": "informac",
//     "imgProduct": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVC5UfcczXbUG5NoqTbUISoaVQ0RM_Qq23sg&s",
//     "priceProduct": "321"
// })
