import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import DashTabbar from '../components/DashTabbar';
import FeedPage from './FeedPage';
import ArticlePostDetail from '../components/post/ArticlePostDetail';
import GifDetailPost from '../components/post/GifDetailPost';

import '../styles/dashboard.css';

const Dashboard = (props) => {
    const { auth } = props;
    if (!auth.token) { return <Redirect to='/login' /> }
    return (
        <div>
            <div className='container'>
                <div style={{ display: '', marginTop: '50px', marginBottom: '50px' }}>
                    <div className='row dash-row'>
                        <div className='col-xs-12 col-sm-1'>
                        </div>
                        <div className='col-xs-12 col-sm-10'>
                            <DashTabbar />
                            <div className='dashboard-display'>
                                <Route exact path='/dashboard/' component={FeedPage} />
                                <Route path='/dashboard/article/:id' component={ArticlePostDetail} />
                                <Route path='/dashboard/gif/:id' component={GifDetailPost} />
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-1'>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}
export default connect(mapStateToProps)(Dashboard);