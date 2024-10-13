import React, { createContext, useReducer } from 'react';
import { orderReducer } from '../reducer/orderReducer';

// Create the context
export const CoffeeContext = createContext();

// Create the provider
export const CoffeeProvider = ({ children }) => {
    const [state, dispatch] = useReducer(orderReducer, { orders: [] });
    
    return (
        <CoffeeContext.Provider value={{ state, dispatch }}>
            {children}
        </CoffeeContext.Provider>
    );
};