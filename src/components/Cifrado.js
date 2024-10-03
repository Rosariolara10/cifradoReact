import React, { useState } from "react";
import "./estilos/Cifrado.css";

const CifradoCesar = () => {
  const [texto, setTexto] = useState("");
  const [desplazamiento, setDesplazamiento] = useState(0);
  const [resultado, setResultado] = useState("");

  const cifrarTexto = () => {
    const cifrado = texto
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          let code = char.charCodeAt(0);
          let base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(
            ((code - base + parseInt(desplazamiento)) % 26) + base
          );
        }
        return char;
      })
      .join("");
    setResultado(cifrado);
  };

  const descifrarTexto = () => {
    const descifrado = texto
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          let code = char.charCodeAt(0);
          let base = code >= 65 && code <= 90 ? 65 : 97;
          return String.fromCharCode(
            ((code - base - parseInt(desplazamiento) + 26) % 26) + base
          );
        }
        return char;
      })
      .join("");
    setResultado(descifrado);
  };

  const copiarAlPortapapeles = () => {
    if (resultado) {
      navigator.clipboard.writeText(resultado)
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
      <h1>Cifrado César</h1>
      <div className="form">
        <label htmlFor="texto">Texto</label>
        <input
          type="text"
          id="texto"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          placeholder="Ingresa el texto aquí"
        />
        <label htmlFor="desplazamiento">Desplazamiento (número entero)</label>
        <input
          type="number"
          id="desplazamiento"
          value={desplazamiento}
          onChange={(e) => setDesplazamiento(e.target.value)}
          placeholder="4"
        />
        <div className="button-container">
          <button onClick={cifrarTexto}>CIFRAR</button>
          <button onClick={descifrarTexto}>DESCIFRAR</button>
        </div>
      </div>
      <div className="result">
        <h2>Resultado</h2>
        <p>{resultado}</p>
        <button onClick={copiarAlPortapapeles}>Copiar al portapapeles</button>
      </div>
    </div>
  );
};

export default CifradoCesar;
