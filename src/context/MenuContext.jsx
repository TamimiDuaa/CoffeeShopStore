// src/context/MenuContext.js
import React, { createContext, useState, useEffect } from 'react';
import menu from '../menu';
// Create the context
export const MenuContext = createContext();

// Create the provider component
export const MenuProvider = ({ children }) => {
    const [coffeeMenu, setCoffeeMenu] = useState([]);
    const [nonCoffeeMenu, setNonCoffeeMenu] = useState([]);
    const [dessertsMenu, setDessertsMenu] = useState([]);
    const [sandwichesMenu, setSandwichesMenu] = useState([]);
    
    useEffect(() => {

        const data = menu;
        console.log(data);
        setCoffeeMenu(data.coffeeMenu);
        setNonCoffeeMenu(data.nonCoffeeMenu);
        setDessertsMenu(data.dessertsMenu);
        setSandwichesMenu(data.coldSandwichesMenu);
        // fetch('/menu.json')
        //     .then(response => {
        //         if (!response.ok) {
        //             throw new Error('Failed to fetch data');
        //         }
        //         return response.json();
        //     })
        //     .then(data => {
        //         setCoffeeMenu(data.coffeeMenu);
        //         setNonCoffeeMenu(data.nonCoffeeMenu);
        //         setDessertsMenu(data.dessertsMenu);
        //         setSandwichesMenu(data.coldSandwichesMenu);
        //     })
        //     .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures it runs only once

    // Pass the state down via context
    return (
        <MenuContext.Provider value={{ coffeeMenu, nonCoffeeMenu, dessertsMenu, sandwichesMenu }}>
            {children}
        </MenuContext.Provider>
    );
};
