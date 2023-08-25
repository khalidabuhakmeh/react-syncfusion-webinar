import React, {useContext} from 'react';
import "./App.css";
import {FruitContext} from './Contexts/FruitContext';

export function App() {
    const fruits = useContext(FruitContext);
    return (
        <>
            <h1>Fruit Basket ({fruits.length})</h1>
            <ul>
                {fruits.map(fruit => (
                    <li key={fruit.name}>
                        {fruit.name} (${fruit.price.toFixed(2)})
                    </li>
                ))}
            </ul>
        </>
    );
}
