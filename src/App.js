import React from 'react';
import './App.css';
import UnicornImage from './components/UnicornImage';
import AlternativeUnicorn from './components/AlternativeUnicorn';

function App() {
    return (
        <div className="App">
            <header className="App-header">

            </header>
            <main>
                <UnicornImage />
                <AlternativeUnicorn />
                <div className="somewhere-else">
                    this is not a unicorn
                </div>
            </main>
        </div>
    );
}

export default App;
