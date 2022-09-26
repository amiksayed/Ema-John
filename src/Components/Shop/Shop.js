import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product'
import Cart from '../Cart/Cart';
import { addToDb, deleteCart, getStoredCart } from '../../Utilities/fakedb';
import useProduct from '../../Hooks/useProduct';
import useCart from '../../Hooks/useCart';
import { Link } from 'react-router-dom';
const Shop = () => {
    const [products, setProducts] = useProduct()
    const [cart, setCart] = useCart(products)

    

    // setting cart and quantity for the first time 
    const addToCart = (selectedItem) => {
        let newCart = []
        const exists = cart.find(product => product.id == selectedItem.id)
        if (!exists) {
            selectedItem.quantity = 1;
            newCart = [...cart, selectedItem]
        }
        else {
            selectedItem.quantity = selectedItem.quantity + 1
            const restProducts = cart.filter(product => product.id != selectedItem.id)
            newCart = [...restProducts, selectedItem]
        }
        setCart(newCart)
        addToDb(selectedItem.id)
    }

    const clearCart = () => {
        setCart([])
        deleteCart()
    }
    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product =>
                        <Product key={product.id} product={product} addToCart={addToCart}> </Product>
                    )
                }
            </div>

            <div className='cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/orderReview' className='review-btn'> Review Order</Link>
                </Cart>
            </div>
        </div >
     );
};

export default Shop;