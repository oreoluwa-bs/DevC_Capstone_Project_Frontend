import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../styles/dashboard.css';

const Dashboard = (props) => {
    const { auth } = props

    if (!auth.userId) { return <Redirect to='/login' /> }

    return (
        <div className='container'>
            <div className='ro'>
                <div style={{ display: 'flex', marginTop: '50px' }}>
                    <div className='col-xs-12 col-sm-3 col-md-2 col-lg-2'>
                        <div>
                            <div className='nav'>
                                <ul className='nav-links'>
                                    <li className='nav-item'>
                                        <Link to="" className='nav-link'>My feed</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="" className='nav-link'>Post an article</Link>
                                    </li>
                                    <li className='nav-item'>
                                        <Link to="" className='nav-link'>Post a gif</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='col-xs-12 col-sm-6 col-md-8 col-lg-8'>
                        <div className='dashboard-display'>

                        </div>
                    </div>
                    <div className='col-sm-3 col-md-2 col-lg-2'>
                        <div className='box'>

                        </div>
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