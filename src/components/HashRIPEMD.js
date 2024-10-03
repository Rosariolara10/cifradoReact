import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import hash from 'hash.js';
import './estilos/HashRIPEMD.css';

const HashGenerator = () => {
    const [message, setMessage] = useState('');
    const [hashVariant, setHashVariant] = useState('RIPEMD-160');
    const [hashResult, setHashResult] = useState(''); // Inicializa como cadena vacía

    const handleGenerateHash = () => {
        let hashValue = '';

        switch (hashVariant) {
            case 'RIPEMD-128':
                hashValue = hash.ripemd160().update(message).digest('hex').substring(0, 32);
                break;
            case 'RIPEMD-160':
                hashValue = CryptoJS.RIPEMD160(message).toString();
                break;
            case 'RIPEMD-256':
                hashValue = hash.ripemd160().update(message).digest('hex').substring(0, 64);
                break;
            case 'RIPEMD-320':
                hashValue = 'RIPEMD-320 no está soportado.';
                break;
            default:
                hashValue = 'Variante de hash no válida.';
        }

        setHashResult(hashValue);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(hashResult);
    };

    return (
        <div className="container">
            <h1>Generador de Hash</h1>
            <div className="form">
                <label>Texto</label>
                <input
                    type="text"
                    placeholder="Ingresa el texto aquí"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <label className="select-label">Variante de RIPEMD</label>
                <select
                    className="select"
                    value={hashVariant}
                    onChange={(e) => setHashVariant(e.target.value)}
                >
                    <option value="RIPEMD-128">RIPEMD-128</option>
                    <option value="RIPEMD-160">RIPEMD-160</option>
                    <option value="RIPEMD-256">RIPEMD-256</option>
                    <option value="RIPEMD-320">RIPEMD-320</option>
                </select>
                <div className="button-container">
                    <button onClick={handleGenerateHash}>Generar Hash</button>
                </div>
            </div>

            {/* Contenedor del resultado */}
            <div className="result">
                <h2>Resultado</h2>
                <p>{hashResult || " "}</p> {/* Mostrar espacio vacío si no hay resultado */}
                <button className="copy-button" onClick={copyToClipboard}>
                    Copiar al portapapeles
                </button>
            </div>
        </div>
    );
};

export default HashGenerator;
