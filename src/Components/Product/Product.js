import React from 'react';
import "./Product.css";
const Product = ({ product, addToCart }) => {
    const { img, name, price, seller, ratings } = product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-details'>
                <h3>{name}</h3>
                <h5>Price: $ {price} </h5>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings}</p>
            </div>
            <button onClick={() => addToCart(product)} > Add to cart <i className="fa-solid fa-cart-plus"></i></button>

        </div>
    );
};

export default Product;