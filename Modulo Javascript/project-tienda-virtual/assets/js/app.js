

console.log("loaded app.js");

const PRODUCTOS = [];


const createProduct = () => {

    console.log("Creando producto.....");
    
   const titleProduct =   document.querySelector("#title-product");
   const descriptionProduct =  document.querySelector("#description-product");
   const imgProduct =  document.querySelector("#img-product");
   const priceProduct =  document.querySelector("#price-product");

   const PRODUCT = {
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





const modalProduct = () => {

    const product = createProduct();

    PRODUCTOS.push(product);

    console.log(PRODUCTOS);

    clearForm();


    showProductFrontend();


}