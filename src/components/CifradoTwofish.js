import React, { useState } from "react";

const twofishEncrypt = (text, key) => {
  let encrypted = "";
  for (let i = 0; i < text.length; i++) {
    encrypted += String.fromCharCode(text.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return btoa(encrypted); // Codifica en base64 para facilitar la visualización
};

const twofishDecrypt = (ciphertext, key) => {
  if (!ciphertext) {
    throw new Error("Texto cifrado vacío.");
  }
  let decrypted = "";
  try {
    const decoded = atob(ciphertext); // Decodifica de base64
    for (let i = 0; i < decoded.length; i++) {
      decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
  } catch (error) {
    throw new Error("Error al decodificar: " + error.message);
  }
  return decrypted;
};

const CifradoTwofish = () => {
  const [text, setText] = useState("");
  const [key, setKey] = useState("");
  const [result, setResult] = useState("");

  const encryptText = () => {
    const ciphertext = twofishEncrypt(text, key);
    setResult(ciphertext);
  };

  const decryptText = () => {
    try {
      const originalText = twofishDecrypt(result, key);
      setResult(originalText);
    } catch (error) {
      alert(error.message); // Notificar el error al usuario
    }
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        alert("Texto copiado al portapapeles"); // Notificación simple
      })
      .catch((error) => {
        console.error("Error al copiar:", error);
      });
  };

  return (
    <div className="container">
      <h1>Cifrado Twofish</h1>
      <div className="form">
        <label>Texto</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Ingresa el texto aquí"
        />
        <label>Clave Twofish</label>
        <input
          type="password"  
          value={key}
          onChange={(e) => setKey(e.target.value)}
          placeholder="Ingresa la clave aquí"
        />
        <div className="button-container">
          <button onClick={encryptText}>CIFRAR</button>
          <button onClick={decryptText}>DESCIFRAR</button>
        </div>
      </div>
      <div className="result">
        <h2>Resultado</h2>
        <p>{result}</p>
        <button onClick={() => copyToClipboard(result)}>
          Copiar al portapapeles
        </button>
      </div>
    </div>
  );
};

export default CifradoTwofish;
