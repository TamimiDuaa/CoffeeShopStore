import React, { useContext, useRef } from 'react';
import { CoffeeContext } from '../context/CoffeeContext';

const Order = () => {
    const { state, dispatch } = useContext(CoffeeContext);
    const nameRef = useRef();

    const removeOrder = (order) => {
        dispatch({ type: 'REMOVE_ORDER', payload: order });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        alert(`Order placed under the name: ${name}`);
        nameRef.current.value = '';
    };

    return (
        <div className='orderSection'>
            <h1>Your Orders</h1>
            <form className="orderForm" onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} placeholder="Your Name" required />
                <button type="submit">Place Order</button>
            </form>
            <ul>
                {state.orders.map((order) => (
                    <li key={order.id}>
                        {order.name} - ${order.price} <button onClick={() => removeOrder(order)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Order;
