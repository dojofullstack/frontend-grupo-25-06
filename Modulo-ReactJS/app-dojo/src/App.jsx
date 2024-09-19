import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function AppRosa() {
    return <>
      <h2>Articulo Blog</h2>
      <img src="" alt="" srcset="" />
      <p>Lorem ipsum dolor sit amet.</p>
    </>
}


function AppHenry() {


  return <div>

    <h1>Hola henry!</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, adipisci!</p>
    <AppRosa/>
  </div>

}




export default AppHenry;