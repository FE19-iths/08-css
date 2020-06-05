import React from 'react';
import unicorn from './unicorn.jpg';
import './unicorn.css';

// Detta går utmärkt men AlternativeUnicorn-sättet rekommenderas

const UnicornImage = () => (
    <div className="unicorn-container">
        Image here
        <img src={unicorn} alt="Unicorn" />
    </div>
);

export default UnicornImage;
