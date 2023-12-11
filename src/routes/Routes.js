import React from "react";
import {
  BrowserRouter,
  Routes as ReactDomRoutes,
  Route,
} from "react-router-dom";
import Inicio from "../pages/inicio/Inicio";
import Productos from "../pages/productos/Productos";
import Acerca from "../pages/acerca/Acerca";
import Error404 from "../pages/404/Error404";
import Contacto from "../pages/contacto/Contacto";

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactDomRoutes>
        <Route path="/" element={<Inicio />} />
        <Route path="acerca" element={<Acerca />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
      </ReactDomRoutes>
    </BrowserRouter>
  );
};

export default Routes;
