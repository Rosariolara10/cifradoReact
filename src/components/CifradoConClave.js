import React, { useState } from "react";
import "./estilos/CifradoConClave.css";

const CifradoConClave = () => {
  const [mensaje, setMensaje] = useState("");
  const [clave, setClave] = useState("");
  const [mensajeCifrado, setMensajeCifrado] = useState("");
  const [matrizCifrado, setMatrizCifrado] = useState([]);

  const cifrarConClave = () => {
    let columnas = parseInt(clave);
    let filas = Math.ceil(mensaje.length / columnas);
    let matriz = Array(filas)
      .fill("")
      .map(() => Array(columnas).fill(""));

    // Llenar la matriz con el mensaje
    for (let i = 0; i < mensaje.length; i++) {
      let row = Math.floor(i / columnas);
      let col = i % columnas;
      matriz[row][col] = mensaje[i];
    }

    // Leer la matriz por columnas para cifrar
    let cifrado = "";
    for (let col = 0; col < columnas; col++) {
      for (let row = 0; row < filas; row++) {
        if (matriz[row][col]) {
          cifrado += matriz[row][col];
        }
      }
    }

    setMatrizCifrado(matriz); // Guardar la matriz como un array bidimensional
    setMensajeCifrado(cifrado); // Guardar el mensaje cifrado
  };

  const copiarAlPortapapeles = () => {
    if (mensajeCifrado) {
      navigator.clipboard
        .writeText(mensajeCifrado)
        .then(() => {
          alert("Texto copiado al portapapeles");
        })
        .catch((err) => {
          alert("Error al copiar el texto: ", err);
        });
    } else {
      alert("No hay texto para copiar");
    }
  };

  return (
    <div className="container">
      <h1>Cifrado y Descifrado con Clave</h1>
      <div className="form">
        <label htmlFor="mensaje">Mensaje</label>
        <input
          type="text"
          id="mensaje"
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          placeholder="Ingresa el mensaje aquí"
        />
        <label htmlFor="clave">Clave (Número de columnas)</label>
        <input
          type="number"
          id="clave"
          value={clave}
          onChange={(e) => setClave(e.target.value)}
          placeholder="0"
        />
        <div className="button-container">
          <button onClick={cifrarConClave}>CIFRAR</button>
          <button onClick={cifrarConClave}>DESCIFRAR</button>
        </div>
      </div>
      <div className="result">
        <h2>Mensaje Cifrado:</h2>
        <p>{mensajeCifrado}</p>
        <button onClick={copiarAlPortapapeles}>Copiar al portapapeles</button>
        <h2>Matriz (Cifrado):</h2>
        <table className="matriz">
          <tbody>
            {matrizCifrado.map((fila, indexFila) => (
              <tr key={indexFila}>
                {fila.map((columna, indexColumna) => (
                  <td key={indexColumna}>{columna || " "}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CifradoConClave;
