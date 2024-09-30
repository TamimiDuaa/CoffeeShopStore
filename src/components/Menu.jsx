// src/components/Menu.js
import React, { useContext } from 'react';
import CoffeeItem from './CoffeeItem';
import { MenuContext } from '../context/MenuContext'; // Import the MenuContext

const Menu = () => {
    const { coffeeMenu, nonCoffeeMenu, dessertsMenu, sandwichesMenu } = useContext(MenuContext); // Use context to access the state

    return (
        <div className='coffeeMenu'>
            <h1>Our Menu</h1>

            <h2>Coffee Menu</h2>
            <ul className='MenuList'>
                {coffeeMenu.map(coffee => (
                    <CoffeeItem key={coffee.id} coffee={coffee} />
                ))}
            </ul>

            <h2>Non-Coffee Menu</h2>
            <ul className='MenuList'>
                {nonCoffeeMenu.map(item => (
                    <CoffeeItem key={item.id} coffee={item} />
                ))}
            </ul>

            <h2>Desserts</h2>
            <ul className='MenuList'>
                {dessertsMenu.map(dessert => (
                    <CoffeeItem key={dessert.id} coffee={dessert} />
                ))}
            </ul>

            <h2>Sandwiches</h2>
            <ul className='MenuList'>
                {sandwichesMenu.map(sandwich => (
                    <CoffeeItem key={sandwich.id} coffee={sandwich} />
                ))}
            </ul>
        </div>
    );
};

export default Menu;
