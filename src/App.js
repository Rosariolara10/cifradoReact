import React, { useState } from "react";
import CifradoCesar from "./components/Cifrado";
import CifradoConClave from "./components/CifradoConClave";
import Informacion from "./components/Informacion";
import CifradoTwofish from "./components/CifradoTwofish";
import CifradoDiffieHellman from "./components/CifradoDiffie-Hellman";
import HashRIPEMD from "./components/HashRIPEMD";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("cesar");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "cesar":
        return <CifradoCesar />;
      case "clave":
        return <CifradoConClave />;
      case "info":
        return <Informacion />;
      case "Twofish":
        return <CifradoTwofish />;
      case "Diffie-Hellman":
        return <CifradoDiffieHellman />;
      case "Hash":
        return <HashRIPEMD />;
      default:
        return <CifradoCesar />;
    }
  };

  return (
    <div className="App">
      <div className="dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          Aplicacion de Cifrado
        </button>
        {dropdownOpen && (
          <ul className="dropdown-menu">
            <li onClick={() => setActiveTab("cesar")}>Cifrado César</li>
            <li onClick={() => setActiveTab("clave")}>Cifrado con Clave</li>
            <li onClick={() => setActiveTab("Twofish")}>Cifrado Twofish</li>
            <li onClick={() => setActiveTab("Diffie-Hellman")}>
              Cifrado Diffie-Hellman <br></br>(Intercambio de claves)
            </li>
            <li onClick={() => setActiveTab("Hash")}>Función Hash RIPEMD</li>
            <li onClick={() => setActiveTab("info")}>Acerca de</li>
          </ul>
        )}
      </div>
      <div className="content">{renderContent()}</div>
    </div>
  );
}

export default App;
