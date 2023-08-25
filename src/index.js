import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import {FruitContext} from "./Contexts/FruitContext";
import {fruits} from "./Data/Fruits";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FruitContext.Provider value={fruits}>
            <App/>
        </FruitContext.Provider>
    </React.StrictMode>
);
