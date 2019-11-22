import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Comments from '../Comments';
import { connect } from 'react-redux';
import { commentPost } from '../../store/actions/gifActions.js';
import Notification from '../Notification';

class GifPostSmall extends Component {
    state = {
        commentIsHidden: false,
        isVisible: false,
    }

    toggleCommentContainer = () => {
        this.setState({
            commentIsHidden: !this.state.commentIsHidden
        });
    }
    handleCommentPost = (gifId, comment) => {
        this.props.commentPost(gifId, comment);
        this.setState({
            isVisible: !this.state.isVisible
        })
        setTimeout(() => {
            this.setState({
                isVisible: !this.state.isVisible
            })
        }, 3000);
    }

    render() {

        let commentState = 'none';
        if (this.state.commentIsHidden) {
            commentState = 'block'
        }
        const { id, title, imageUrl, authorName } = this.props;
        return (
            <div className='post'>
                <Link to={`/dashboard/gif/${id}`} className='post-title'><p className='bold large'>{title}</p></Link>
                <div className='post-content'>
                    <div className='ima'>
                        <img src={imageUrl} alt='title-img' className='post-img' />
                    </div>
                    <div className='post-tools'>
                        <div className='row'>
                            <div className='col-xs-6'>
                                <p className='x-s post-author'>By {authorName}</p>
                            </div>
                            <div className='col-xs-6'>
                                <FontAwesomeIcon className='float-right f-icon' icon={faComment} onClick={this.toggleCommentContainer} />
                            </div>
                        </div>
                    </div>
                    <Comments postId={id} commentState={commentState} handleCommentPost={this.handleCommentPost} />
                    <Notification isVisible={this.state.isVisible} notification={this.props.notification} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        notification: state.gif.notification,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        commentPost: (gifId, comment) => dispatch(commentPost(gifId, comment))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(GifPostSmall);