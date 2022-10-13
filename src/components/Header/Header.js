import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>KT-PROGRAMMING-CLUB</h1> 
        </div>
    );
};

export default Header;