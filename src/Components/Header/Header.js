import React from 'react';
import './Header.css'
import Logo from '../../Logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user] = useAuthState(auth)
    return (
        <header>
            <Link to="/">
                <img src={Logo} alt="" />
            </Link>
            <nav>
                <NavLink to="/shop" className={({ isActive }) => isActive ? 'active-link' : 'link'}> Shop</NavLink>
                <NavLink to="/orderReview" className={({ isActive }) => isActive ? 'active-link' : 'link'}> Order Review</NavLink>
                <NavLink to="/inventory" className={({ isActive }) => isActive ? 'active-link' : 'link'}> Manage Inventory</NavLink>
                {user ? <i class="fa-solid fa-arrow-right-from-bracket" onClick={() => signOut(auth)}></i> :
                    <NavLink to="/login" className={({ isActive }) => isActive ? 'active-link' : 'link'}> Login</NavLink>
                }
            </nav>
        </header >
    );
};

export default Header;