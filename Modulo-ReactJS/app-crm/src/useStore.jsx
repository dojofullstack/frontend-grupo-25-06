import axios from "axios";
import { create } from "zustand";



const getToken = () => {
    const accessToken = localStorage.getItem("access");
    if (accessToken){
        // validar si el token esta activo
        return accessToken
    }
}


const authUserMe = (set) => {

    const API_USER = "https://api.dojofullstack.com/api/auth/users/me/";

    const accessToken = getToken();
    
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    axios.get(API_USER).then((res) => {
        console.log(res.data);
        set({
            perfil: res.data,
            isLogin: true
        })
    }).catch((error) => {
        localStorage.removeItem("access");
    })

}





const useStore = create((set, get) => (
    {
        theme: "dark",
        perfil: null,
        isLogin: false,
        updateIsLogin: (data) => set({isLogin: data}),
        updatePerfil: (data) => set({perfil: data}),
        changeTheme: (color) => set({theme: color}),
        accessToken: "",
        refresToken: "",
        authUserMe: () => authUserMe(set)
    }
))



export default useStore;