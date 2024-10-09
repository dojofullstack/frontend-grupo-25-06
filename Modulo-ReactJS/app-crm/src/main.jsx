import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Rutas from "./Rutas";
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Rutas />
  </StrictMode>
);
