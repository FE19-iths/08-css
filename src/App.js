import React from 'react';
import './App.css';
import UnicornImage from './components/UnicornImage';
import AlternativeUnicorn from './components/AlternativeUnicorn';
import OnOffButton from './components/OnOffButton';
import GrowButton from './components/GrowButton';
import ShakeButton from './components/ShakeButton';
import SpringDemo from './components/SpringDemo';

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
                <OnOffButton />
                <GrowButton />
                <ShakeButton />
                <SpringDemo />
            </main>
        </div>
    );
}

export default App;
