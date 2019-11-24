import React, { Component } from 'react';

class Comments extends Component {
    state = {
        comment: ''
    }
    handleTextChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    render() {
        const { commentState, handleCommentPost, postId } = this.props;
        return (
            <div>
                <form style={{ display: commentState }} onSubmit={(e) => {
                    e.preventDefault()
                    handleCommentPost(postId, this.state.comment)
                    this.setState({
                        comment: '',
                    });
                }}>
                    <textarea className='form-input' id='comment' value={this.state.comment} onChange={this.handleTextChange} required></textarea>

                    <div className='row'>
                        <div className='col-xs-12'>
                            <button className='btn btn-primary float-right'>Comment</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Comments;