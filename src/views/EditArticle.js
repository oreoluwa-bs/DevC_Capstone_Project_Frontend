import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getArticle, editArticle } from '../store/actions/articleActions';
import Notification from '../components/Notification';

class EditArticle extends Component {
    state = {
        isVisible: false,
    }
    componentDidMount() {
        this.props.getArticle(this.props.id);
        setTimeout(() => {
            this.setState({
                title: this.props.post.title,
                article: this.props.post.article
            })
        }, 200);
    }


    handleSubmit = (e) => {
        e.preventDefault();
        this.props.editArticle(this.props.id,{
            title: this.state.title,
            article: this.state.article
        });
        this.setState({
            isVisible: !this.state.isVisible
        })
        setTimeout(() => {
            this.setState({
                isVisible: !this.state.isVisible
            })
        }, 3000);
        this.props.history.push('/dashboard/')
    }

    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        const { auth } = this.props;
        if (!auth.token) { return <Redirect to='/dashboard/' /> }
        return (
            <div className='feed-container'>
                <Notification isVisible={this.state.isVisible} notification={this.props.notification} />
                <div className=''>
                    <h5>Edit an article</h5>
                    <form onSubmit={this.handleSubmit}>
                        <div className='form-group'>
                            <p>Title:</p>
                            <input type='text' className='form-input' id='title' placeholder='Hello World...' value={this.state.title} onChange={this.handleTextChange} autoFocus />
                        </div>
                        <div className='form-group'>
                            <p>Content:</p>
                            <textarea className='form-input' id='article' value={this.state.article} onChange={this.handleTextChange}></textarea>
                        </div>
                        <div className='form-group'>
                            <div className='row'>
                                <div className='col-xs-12'>
                                    <button type='submit' className='btn btn-primary float-md-right'>Edit article</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const post = state.article.post;
    return {
        notification: state.article.notification,
        auth: state.auth.auth,
        id: ownProps.match.params.id,
        post,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editArticle: (id, creds) => dispatch(editArticle(id, creds)),
        getArticle: (id) => dispatch(getArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);