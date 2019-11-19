import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import SignedInLinks from './Navbarlinks';

const Navbar = (props) => {
    const { auth } = props;
    const links = auth.token ? <SignedInLinks /> : <SignedOutLinks />;
    return (
        <nav className='navbar'>
            <div className='container'>
                {/* <div className='hamburger'>
                    <div className='line'></div>
                    <div className='line'></div>
                    <div className='line'></div>
                </div> */}
                <ul className='nav-links float-md-left'>
                    <li className='nav-item nav-brand'><Link to='/DevC_Capstone_Project_Frontend/' className='nav-link'>Teamwork</Link></li>
                </ul>
                {links}
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth,
    }
}

export default connect(mapStateToProps)(Navbar);

const SignedOutLinks = () => {
    return null;
}