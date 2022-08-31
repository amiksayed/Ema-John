import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../Utilities/fakedb';

const useCart = (products) => {
    const [cart, setCart] = useState([])

    // getting product info and setting quantity from local storage.

    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (let id in storedCart) {
            const addedProduct = products.find(product => product.id == id)
            if (addedProduct) {
                addedProduct.quantity = storedCart[id]
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])
    return [cart, setCart]
};

export default useCart;
