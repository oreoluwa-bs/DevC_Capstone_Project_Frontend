import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='container'>
                <div className='hamburger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div>
                <ul className='nav-links float-md-left'>
                    <li className='nav-item nav-brand'><Link to='/' className='nav-link'>Teamwork</Link></li>
                </ul>
                <ul className='nav-links float-md-right'>
                    {/* <li className='nav-item'><Link to='' className='nav-link'>About</Link></li> */}
                    {/* <li className='nav-item'><Link to='' className='nav-link'>Feed</Link></li> */}
                    <li className='nav-item btn'><Link to='' className='btn-sm'>Logout</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;