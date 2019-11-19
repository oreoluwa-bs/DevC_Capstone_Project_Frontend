import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
    return (
        <ul className='nav-links float-md-right'>
            {/* <li className='nav-item'><Link to='' className='nav-link'>About</Link></li> */}
            {/* <li className='nav-item'><Link to='' className='nav-link'>Feed</Link></li> */}
            <li className='nav-item nav-btn'><button onClick={() => {
                props.signOut();
            }} className='btn-sm'>Logout</button></li>
        </ul>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch({
            type: 'SIGNOUT_SUCCESS'
        })
    }
}


export default connect(null, mapDispatchToProps)(SignedInLinks);
