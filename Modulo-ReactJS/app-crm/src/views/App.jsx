import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import axios from "axios";
import moment from "moment/moment";


const API_CUSTOMER = "https://api.dojofullstack.com/api-demo/v1/customers/";


const App = () => {

    const [customers, setCustomers] = useState([]);

    const [nombre, nombreSet ]  = useState("");
    const [apellido, apellidoSet ]  = useState("");
    const [email, emailSet ]  = useState("");
    const [celular, celularSet ]  = useState("");
    const [estadoContacto, estadoContactoSet ]  = useState("");

    const [loadingCustomer, setLoadingCustomer] = useState(false);

    // para crear o actualizar
    const [stateCreateorUpdate, setStateCreateorUpdate] = useState(null);
    const [customerIdActive, setCustomerIdActive] = useState(null);


    // console.log("celular", celular);
    // console.log("celularSet", celularSet);
    // console.log(customers);
    
    const clearFormCustomer = () => {
      nombreSet("");
      apellidoSet("");
      emailSet("");
      celularSet("");
      estadoContactoSet("");
      setStateCreateorUpdate(null);
    }


    const crearContacto = () => {
        setLoadingCustomer(true);
        console.log("Guarando datos....");
  

        const data = {
          "name": nombre,
          "lastname": apellido,
          "email": email,
          "phone": celular,
          "state": estadoContacto
        }

          // consumir API CRM AXIOS
        axios.post(API_CUSTOMER, data).then((res) => {

          setLoadingCustomer(false);
          document.getElementById('my-drawer-4').checked = false;
          // console.log(res.data);
          clearFormCustomer();
          listarContactos();

        }).catch(err => {
          console.log(err);
          setLoadingCustomer(false);
        })



    }


    const editarContacto = () => {
      setLoadingCustomer(true);
      console.log("editando contando...");

      const data = {
        "name": nombre,
        "lastname": apellido,
        "email": email,
        "phone": celular,
        "state": estadoContacto
      }

        // consumir API CRM AXIOS
      axios.put(`${API_CUSTOMER}${customerIdActive}/`, data).then((res) => {

        setLoadingCustomer(false);
        document.getElementById('my-drawer-4').checked = false;
        // console.log(res.data);
        clearFormCustomer();
        listarContactos();

      }).catch(err => {
        console.log(err);
        setLoadingCustomer(false);
      })



    }

    const listarContactos = () => {

      axios.get(API_CUSTOMER).then((res) => {
        // console.log(res.data);
        setCustomers(res.data.reverse());
      })

    }
  


    const openModalUpdate = (customerId) => {
      setCustomerIdActive(customerId);
      setStateCreateorUpdate(false);

      document.getElementById('my-drawer-4').checked = true;

      axios.get( `${API_CUSTOMER}${customerId}` ).then((res) => {
            console.log("consultado informacion del cliente");
            console.log(res.data);
            nombreSet(res.data.name);
            apellidoSet(res.data.lastname);
            emailSet(res.data.email);
            celularSet(res.data.phone);
            estadoContactoSet(res.data.state);

      })

    }


    useEffect( () => {
      console.log("ejecutando callback useEffect");
      listarContactos();
    }, []);


  return (
    <>
      <Header />


        <div className="container mx-5 font-bold">


        <h2 className="text-2xl">Contactos</h2>

        <div className="flex justify-end">
            <button  className="btn btn-success text-md" onClick={
                ()=> {
                  setStateCreateorUpdate(true);
                  document.getElementById('my-drawer-4').checked = true;
                }
                }>
                Crear Contacto
            </button>
        </div>



{/* Crear datos del contacto */}
<div className="drawer drawer-end bg-white z-10 ">

  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>

    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      
        <div className=" flex flex-col gap-5">

                <h2 className="text-2xl font-bold">
                    {stateCreateorUpdate ?  "Ingresar Datos": "Actualizar Datos"  }
                </h2>


<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Nombre del contacto" value={nombre} onChange={ (e) => nombreSet(e.target.value) } />
</label>


<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>
  <input type="text" className="grow" placeholder="Apellido del contacto" value={apellido} onChange={ (e) => apellidoSet(e.target.value) } />
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="text" className="grow" placeholder="Email" value={email} onChange={ (e) => emailSet(e.target.value) } />
</label>



<label className="input input-bordered flex items-center gap-2">

  <input type="text" className="grow" placeholder="Tlf. Celular" value={celular} onChange={ (e) => celularSet(e.target.value) }  />
</label>



<select className="select select-secondary w-full max-w-xs" value={estadoContacto} onChange={ (e) => estadoContactoSet(e.target.value) } >
  <option disabled selected>Seleccionar el Estado</option>
  <option value="lead">Lead</option>
  <option value="en_seguimiento">En seguimiento</option>
  <option value="cliente">Cliente</option>
</select>




{ stateCreateorUpdate ?
<button className="btn btn-success btn-md text-lg" onClick={crearContacto} disabled={loadingCustomer}>
    
    {loadingCustomer && <span className="loading loading-spinner"></span> }
     Crear Contacto
</button>  :
<button className="btn btn-success btn-md text-lg" onClick={editarContacto} disabled={loadingCustomer} >
    
    {loadingCustomer && <span className="loading loading-spinner"></span> }
     Actualizar Contacto
</button>
}





        </div>

    </ul>
  </div>
</div>





<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Nombre</th>
        <th>Email</th>
        <th>Tlf. Celular</th>
        <th>Estado</th>
        <th>Fecha Creacion</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
          

        
        {

            customers?.map((item, index) =>  (

              <tr key={index}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{item.name} </div>
                    <div className="text-sm opacity-50">Peru</div>
                  </div>
                </div>
              </td>
              <td>
                {item.email}
              </td>
              <td>{item.phone}</td>
              <td>{item.state}</td>
              <td>{moment(item.created).format('MMMM Do YYYY, h:mm:ss a')}</td>
              <th>
                <button className="btn btn-info btn-sm"  onClick={() => openModalUpdate(item.id) } >Actualizar</button>
              </th>
            </tr>

            )  ) 

        }
            
     


    </tbody>
    {/* foot */}
    <tfoot>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </tfoot>
  </table>
</div>

        </div>





      <Footer />
    </>
  );
};

export default App;
