import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
        const totalSalary = cart.reduce((sum, players)=> sum + players.salary,0)
    
    return (
        <div>
            <h2></h2>
            <p>total salary : ${totalSalary}</p>
        </div>
    );
};

export default Cart;