import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons'
import Comments from './Comments';
import { connect } from 'react-redux';

class GifPostSmall extends Component {
    state = {
        commentIsHidden: false
    }

    toggleCommentContainer = () => {
        this.setState({
            commentIsHidden: !this.state.commentIsHidden
        });
    }
    handleCommentPost = (fo) => {
        console.log(fo)
    }

    render() {

        let commentState = 'none';
        if (this.state.commentIsHidden) {
            commentState = 'block'
        }
        const { id, title, imageUrl, authorName } = this.props;
        return (
            <div className='post'>
                <Link to={`article/${id}`} className='post-title'><p className='bold large'>{title}</p></Link>
                <div className='post-content'>
                    <div className='ima'>
                        <img src={imageUrl} alt='title-img' className='post-img'/>
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
                    <Comments commentState={commentState} handleCommentPost={this.handleCommentPost} />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // signIn: (creds) => dispatch(signIn(creds))
    }
}


export default connect(null, mapDispatchToProps)(GifPostSmall);