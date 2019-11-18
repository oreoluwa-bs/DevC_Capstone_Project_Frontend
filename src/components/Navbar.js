import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'

const Navbar = (props) => {
    const { authError } = props;
    const links = authError ? <ul className='nav-links float-md-right'>
        {/* <li className='nav-item'><Link to='' className='nav-link'>About</Link></li> */}
        {/* <li className='nav-item'><Link to='' className='nav-link'>Feed</Link></li> */}
        <li className='nav-item nav-btn'><Link to='' className='btn-sm'>Logout</Link></li>
    </ul> : null;
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
                {links}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
    }
}

export default connect(mapStateToProps)(Navbar);