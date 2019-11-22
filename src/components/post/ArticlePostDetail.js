import React, { Component } from 'react';
import { connect } from 'react-redux';
import { commentPost, getArticle } from '../../store/actions/articleActions';
import Comments from '../Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import Notification from '../Notification';

class ArticlePostDetail extends Component {
    state = {
        isVisible: false,
    }

    componentDidMount() {
        this.props.getArticle(this.props.id)
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.props.getArticle(this.props.id)
        return true
    }

    handleCommentPost = (gifId, comment) => {
        this.props.commentPost(gifId, comment)
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
        const { id, title, article, authorName, comments, authorId } = this.props.post;
        return (
            <div className='feed-container'>
                <Notification isVisible={this.state.isVisible} notification={this.props.notification} />
                <div className={`post`}>
                    <p className='bold large post-title'>{title}</p>
                    <div className='post-content'>
                        <p>{article}</p>
                        <div className='post-tools'>
                            <div className='row'>
                                <div className='col-xs-6'>
                                    <p className='x-s post-author'>By {authorName}</p>
                                </div>
                                <div className='col-xs-6'>
                                    {
                                        // eslint-disable-next-line eqeqeq
                                        this.props.auth.userId == authorId &&
                                        <span>
                                            <FontAwesomeIcon className='float-right f-icon' icon={faPencilAlt} />
                                            <FontAwesomeIcon className='float-right f-icon' icon={faTrashAlt} />
                                        </span>
                                    }
                                </div>
                            </div>
                        </div>
                        <Comments postId={id} commentState={true} handleCommentPost={this.handleCommentPost} />
                    </div>
                    <p>Comments :</p>
                    {
                        comments.map((comment) => {
                            return (
                                <div className={`post`} key={comment.id}>
                                    <div className='post-content'>
                                        <p>{comment.comment}</p>
                                        <p className='x-s post-author'>By {comment.authorName}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.auth,
        id: ownProps.match.params.id,
        post: state.article.post,
        notification: state.gif.notification,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: (gifId) => dispatch(getArticle(gifId)),
        commentPost: (gifId, comment) => dispatch(commentPost(gifId, comment))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePostDetail);