import React from 'react';
import home from './home.jpg'
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-contents">
                <p>Sale up to 70% off</p>
                <h2>New Collection For Fall</h2>
                <h3>Discover all the new arrivals of ready-to-wear collection.</h3>
                <Link to='/shop' className='shop-btn'>SHOP NOW</Link>
            </div>
            <img src={home} alt="man standing in branded outfit" />
        </div>
    );
};

export default Home;