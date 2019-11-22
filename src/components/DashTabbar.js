import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStickyNote, faImage, faFolderMinus } from '@fortawesome/free-solid-svg-icons'

const DashTabbar = () => {
    return (
        <div className='dashboard-tabbar'>
            <div className='nav'>
                <ul className='nav-links'>
                    <li className='nav-item'>
                        <NavLink to='/dashboard/' className='nav-link' activeClassName='activeRoute'>
                            <FontAwesomeIcon icon={faFolderMinus} size='2x' />
                            <span>My feed</span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/dashboard/post-article' className='nav-link' activeClassName='activeRoute'>
                            <FontAwesomeIcon icon={faStickyNote} size='2x' />
                            <span>Post an article</span>
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to='/dashboard/post-gif' className='nav-link' activeClassName='activeRoute'>
                            <FontAwesomeIcon icon={faImage} size='2x' />
                            <span>Post a gif</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default DashTabbar;