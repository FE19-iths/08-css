import React from 'react';

// Absolut sökväg: utgår från root
// Relativ sökväg: utgår från där jag står
// Använd relativa sökvägar, annars får du problem med t.ex. GitHub Pages

// Inline styles är inte lika effektivt som className
const AlternativeUnicorn = () => (
    <div className="unicorn-container">
        Image here
        <img src="./alternative-unicorn.jpg"
            alt="Another unicorn"
            style={ {
                width: '15em'
            } }
            />
    </div>
);

export default AlternativeUnicorn;
