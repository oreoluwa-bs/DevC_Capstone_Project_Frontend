import React from 'react';
import { Link } from 'react-router-dom';

export const SignedInLinks = () => {
    return (
        <ul className='nav-links float-md-right'>
            {/* <li className='nav-item'><Link to='' className='nav-link'>About</Link></li> */}
            {/* <li className='nav-item'><Link to='' className='nav-link'>Feed</Link></li> */}
            <li className='nav-item nav-btn'><Link to='' className='btn-sm'>Logout</Link></li>
        </ul>
    );
}

export const SignedOutLinks = () => {
    return null;
}