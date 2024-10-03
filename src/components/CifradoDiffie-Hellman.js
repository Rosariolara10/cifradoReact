import React, { useState } from 'react';
import './estilos/CifradoDiffie-Hellman.css';

const MaquinaAlice = ({ datosBob, setDatosAlice }) => {
  const [primo, setPrimo] = useState('');
  const [generador, setGenerador] = useState('');
  const [clavePrivada, setClavePrivada] = useState('');
  const [llavePublica, setLlavePublica] = useState(null); // Inicializar como null
  const [mensajeDesencriptado, setMensajeDesencriptado] = useState('');

  const generarLlavePublica = () => {
    const p = Number(primo);
    const g = Number(generador);
    const x = Number(clavePrivada);
    const h = Math.pow(g, x) % p;
    const nuevaLlavePublica = { p, g, h };
    setDatosAlice(nuevaLlavePublica);  // Aquí estás pasando los datos correctamente
  };
  

  const desencriptarMensaje = () => {
    const { c1, c2 } = datosBob; // Obtener c1 y c2 de Bob
    const mensaje = c2; // Ejemplo simple de desencriptación
    setMensajeDesencriptado(mensaje);
  };

  return (
    <div className="container-item">
      <h2>Máquina de Alice</h2>
      <label>Primo (p)</label>
      <input type="number" value={primo} onChange={(e) => setPrimo(e.target.value)} />
      
      <label>Generador (g)</label>
      <input type="number" value={generador} onChange={(e) => setGenerador(e.target.value)} />
      
      <label>Clave Privada (x)</label>
      <input type="number" value={clavePrivada} onChange={(e) => setClavePrivada(e.target.value)} />
      
      <button onClick={generarLlavePublica}>Generar Llave Pública</button>
      
      {llavePublica && ( // Solo se renderiza si llavePublica no es null
        <div>
          <h3>Llave pública:</h3>
          <p>p: {llavePublica.p}, g: {llavePublica.g}, h: {llavePublica.h}</p>
        </div>
      )}

      {datosBob.c1 !== undefined && datosBob.c2 !== undefined && (
        <div>
          <h3>Mensaje encriptado recibido:</h3>
          <p>c1: {datosBob.c1}, c2: {datosBob.c2}</p>
          <button onClick={desencriptarMensaje}>Desencriptar</button>
          {mensajeDesencriptado && (
            <p>Mensaje desencriptado: {mensajeDesencriptado}</p>
          )}
        </div>
      )}
    </div>
  );
};

const MaquinaBob = ({ setDatosBob }) => {
  const [claveEncriptacion, setClaveEncriptacion] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [c1, setC1] = useState(''); // Parte del mensaje encriptado
  const [c2, setC2] = useState(''); // Parte del mensaje encriptado

  const encriptarMensaje = () => {
    const newC1 = Math.floor(Math.random() * 100); // Simular el cálculo de c1
    const newC2 = Math.floor(Math.random() * 100); // Simular el cálculo de c2
    setC1(newC1);
    setC2(newC2);
    setDatosBob({ claveEncriptacion, mensaje, c1: newC1, c2: newC2 });
  };

  return (
    <div className="container-item">
      <h2>Máquina de Bob</h2>
      <label>Clave de Encriptación (y)</label>
      <input type="number" value={claveEncriptacion} onChange={(e) => setClaveEncriptacion(e.target.value)} />
      
      <label>Mensaje (m)</label> 
      <input type="number" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
      
      <button onClick={encriptarMensaje}>Encriptar Mensaje</button>

      {c1 && c2 && (
        <p>{`Mensaje encriptado: c1 = ${c1}, c2 = ${c2}`}</p>
      )}
    </div>
  );
};

const Comunicacion = ({ datosAlice, datosBob }) => {
    return (
      <div className="container-item">
        <h2>Comunicación</h2>
        {datosAlice && datosAlice.h !== undefined && (
          <div>
            <strong>Llave pública de Alice:</strong> 
            <p>p: {datosAlice.p}, g: {datosAlice.g}, h: {datosAlice.h}</p>
          </div>
        )}
        {datosBob.c1 !== undefined && datosBob.c2 !== undefined && (
          <div>
            <strong>Mensaje encriptado de Bob:</strong>
            <p>c1: {datosBob.c1}, c2: {datosBob.c2}</p>
          </div>
        )}
      </div>
    );
  };  

const CifradoDiffieHellman = () => {
  const [datosAlice, setDatosAlice] = useState({});
  const [datosBob, setDatosBob] = useState({});

  return (
    <div className="containerDH">
      <h1>Cifrado Diffie-Hellman</h1>
      <div className="three-containers">
        <MaquinaAlice datosBob={datosBob} setDatosAlice={setDatosAlice} />
        <Comunicacion 
          datosAlice={datosAlice} 
          datosBob={datosBob} 
        />
        <MaquinaBob setDatosBob={setDatosBob} />
      </div>
    </div>
  );
};

export default CifradoDiffieHellman;
