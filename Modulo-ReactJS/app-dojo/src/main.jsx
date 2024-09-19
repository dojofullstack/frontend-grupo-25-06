import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import AppHenry from './App.jsx'
import './index.css'
import Home from './views/Home'




createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Home/>

  </StrictMode>,
)

