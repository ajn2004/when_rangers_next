// src/components/Error.js
import React from 'react';

const Error = ({ message }) => {
    const errorMessage = typeof message === 'string' ? message : JSON.stringify(message);
    <p>Error: {String(message)}</p>
};

export default Error;

// Error.js