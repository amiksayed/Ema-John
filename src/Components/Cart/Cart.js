import React from 'react';
import './Cart.css'
const Cart = ({ cart, clearCart,children }) => {
    let quantity = 0;
    let price = 0;
    let shipping = 0;
    cart.forEach(product => {
        price = product.price * product.quantity + price;
        shipping = product.shipping + shipping;
        quantity = product.quantity + quantity
    })
    let tax = price * (15 / 100)
    let grandTotal = price + shipping + tax
    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <div className='cart-content'>
                <p>Selected Items: {quantity} </p>
                <p>Total Price: $ {price}</p>
                <p>Shipping Charge: $ {shipping}</p>
                <p>Tax: $ {tax.toFixed(2)} </p>
                <h3>Grand Total: $ {grandTotal}</h3>
            </div>
            <div className='buttons'>
                <button className='cart-btn' onClick={clearCart}>Clear Cart</button>
               {children}
            </div>
        </div>
    );
};

export default Cart;