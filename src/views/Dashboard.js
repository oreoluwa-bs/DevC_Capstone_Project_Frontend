import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/dashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, faImage, faFolderMinus } from '@fortawesome/free-solid-svg-icons'

const Dashboard = (props) => {
    const { auth } = props

    if (!auth.userId) { return <Redirect to='/login' /> }

    return (
        <div className='container'>
            <div style={{ display: '', marginTop: '50px' }}>
                <div className='row'>
                    <div className='col-xs-12 col-sm-3 col-md-2 col-lg-2'>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-8 col-lg-8'>
                        <div className='dashboard-tabbar'>
                            <div className='nav'>
                                <ul className='nav-links'>
                                    <li className='nav-item'>
                                        <NavLink to='/' className='nav-link' activeClassName='activeRoute'>
                                            <FontAwesomeIcon icon={faFolderMinus} size='2x' />
                                            <span>My feed</span>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='' className='nav-link'>
                                            <FontAwesomeIcon icon={faStickyNote} size='2x' />
                                            <span>Post an article</span>
                                        </NavLink>
                                    </li>
                                    <li className='nav-item'>
                                        <NavLink to='' className='nav-link'>
                                            <FontAwesomeIcon icon={faImage} size='2x' />
                                            <span>Post a gif</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='dashboard-display'>

                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-3 col-md-2 col-lg-2'>
                    </div>
                </div>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}
export default connect(mapStateToProps)(Dashboard);