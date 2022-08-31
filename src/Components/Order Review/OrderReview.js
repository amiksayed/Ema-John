import React from 'react';
import useCart from '../../Hooks/useCart';
import useProduct from '../../Hooks/useProduct';
import Cart from '../Cart/Cart';
import './OrderReview.css'
import { deleteCart } from '../../Utilities/fakedb';
import { Link } from 'react-router-dom';
const OrderReview = () => {
    const [products, setProducts] = useProduct()

    const [cart, setCart] = useCart(products)
    const deleteProduct = (id) => {
        const restCart = cart.filter(product => product.id != id)
        setCart(restCart)
    }
    const clearCart = () => {
        setCart([])
        deleteCart()
    }
    return (
        <div className='order-review-container'>
            <div className='cart-product'>
                {
                    cart.map(product =>
                        <div className='selected-cart-content'>
                            <img src={product.img} alt="" />
                            <div className='selected-cart-details'>
                                <h5>{product.name}</h5>
                                <p>{product.price}</p>
                                <p>{product.shipping}</p>
                            </div>
                            <i className='fa-solid fa-trash' onClick={() => deleteProduct(product.id)}></i>
                        </div>
                    )
                }
            </div>
            <div className='review-cart-container'>
                <Cart cart={cart} clearCart={clearCart}>
                    <Link to='/orderReview' className='review-btn'> Proceed Checkout</Link>
                </Cart>
            </div>

        </div>
    );
};

export default OrderReview;