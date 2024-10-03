import React from "react";
import './estilos/Informacion.css'; 

const Informacion = () => {
  return (
    <div className="containerInfo">
      <h2>Cifrado y Hash: Métodos Esenciales para la Protección de Datos</h2>
      <p>
        Esta página ofrece una visión rápida de varios métodos de cifrado y funciones hash utilizadas para la seguridad de datos. 
        Desde cifrados históricos hasta técnicas avanzadas, cada uno juega un papel clave en la protección de la información.
      </p>
      <ul>
        <li>
          <strong>Cifrado César:</strong> Desplaza las letras del mensaje un número fijo en el alfabeto. 
          Es uno de los cifrados más antiguos y sencillos.
        </li>
        <li>
          <strong>Cifrado con Clave:</strong> Método simétrico donde se utiliza una clave compartida para cifrar y descifrar datos.
        </li>
        <li>
          <strong>Cifrado Twofish:</strong> Es un cifrado simétrico de alta seguridad que usa bloques de 128 bits y 
          permite claves de hasta 256 bits. Es eficiente y seguro, usado en aplicaciones que requieren protección robusta de datos, 
          como cifrado de discos y comunicaciones seguras.
        </li>
        <li>
          <strong>Intercambio de Claves Diffie-Hellman:</strong> Permite a dos partes compartir una clave secreta de forma segura, 
          incluso en canales inseguros.
        </li>
        <li>
          <strong>Función Hash RIPEMD:</strong> Es una función hash criptográfica que convierte datos en un valor único de 
          longitud fija. RIPEMD se utiliza principalmente para verificar la integridad de archivos y firmas digitales, 
          asegurando que los datos no hayan sido alterados.
        </li>
      </ul>
      <div className="personalInfo">
        <h3>Datos Personales</h3>
        <p><strong>Nombre:</strong> Maria del Rosario Lara Hernandez</p>
        <p><strong>Cuatrimestre y Grupo:</strong> 7º "A"</p>
        <p><strong>Carrera:</strong> Ing. Desarrollo y Gestión de Software</p>
        <p><strong>Universidad:</strong> UTHH</p>
      </div>
    </div>
  );
};

export default Informacion;
