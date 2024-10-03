// hashFunctions.js
import { createHash } from 'ripple-lib';

// Función para calcular RIPEMD-128
export const ripemd128 = (data) => {
    return createHash('ripemd160').update(data).digest('hex').slice(0, 32); // RIPEMD-128 es un truncado de RIPEMD-160
};

// Función para calcular RIPEMD-160
export const ripemd160 = (data) => {
    return createHash('ripemd160').update(data).digest('hex');
};

// Función para calcular RIPEMD-256
export const ripemd256 = (data) => {
    return createHash('ripemd256').update(data).digest('hex');
};

// Función para calcular RIPEMD-320
export const ripemd320 = (data) => {
    return createHash('ripemd320').update(data).digest('hex');
};
