// import Routes from "./routes/Routes";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Productos from "./pages/productos/Productos";
import Contacto from "./pages/contacto/Contacto";
import Error404 from "./pages/404/Error404";
import Acerca from "./pages/acerca/Acerca";
import Footer from "./components/Footer/Footer";
import Inicio from "./pages/inicio/Inicio";
import { Route, Routes } from "react-router-dom";
import { ModalStyled } from "./components/UI/Modal/modalStyles";
import Login from "./pages/login/Login";
import SignUp from "./pages/signUp/SignUp";
import VerifyEmail from "./pages/verifyEmail/VerifyEmail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="acerca" element={<Acerca />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<SignUp />} />
        <Route path="verify" element={<VerifyEmail />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <ModalStyled />;
      <Footer />
    </div>
  );
}

export default App;
