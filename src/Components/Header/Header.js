import React from 'react';
import './Header.css'
import Logo from '../../Logo.svg';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <nav>
                <Link to="/shop">Shop</Link>
                <Link to="/orderReview">Order Review</Link>
                <Link to="inventory">Manage Inventory</Link>
                <Link to="login">Login</Link>
            </nav>
        </header>
    );
};

export default Header;