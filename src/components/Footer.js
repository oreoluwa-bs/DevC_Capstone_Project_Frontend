import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Footer = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <ul className='nav-links float-md-left'>
                    <li className='nav-item'><Link to='/' className='nav-link'>Teamwork</Link></li>
                </ul>
                <ul className='nav-links float-md-right'>
                    <li className='nav-item'><p className='x-s'>2019  Oreoluwa Bimbo-Salami</p></li>
                </ul>
            </div>
        </nav>
    );
}

export default Footer;
