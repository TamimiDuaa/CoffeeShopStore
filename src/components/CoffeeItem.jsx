import React, { useContext } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const CoffeeItem = ({ coffee }) => {
    const { dispatch } = useContext(CoffeeContext);

    const addToOrder = () => {
        dispatch({ type: 'ADD_ORDER', payload: coffee });
    };

    return (
        <li >
            <div className='imageSection'><img className='srcImage' src={coffee.imgSrc}></img></div>
            <div className='detailsSection'>
            <strong>{coffee.name}</strong> - {coffee.price}$
            <p>{coffee.description}</p>
            <div className='btn-section'><button onClick={addToOrder}>Add to Order</button>
           
            </div>
            </div>
          </li>

        
    );
};

export default CoffeeItem;
