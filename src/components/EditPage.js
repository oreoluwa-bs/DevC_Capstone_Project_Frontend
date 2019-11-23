import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getArticle } from '../store/actions/articleActions';
import EditArticle from '../views/EditArticle';

class EditPage extends Component {
    componentDidMount() {
        this.props.getArticle(this.props.id);
    }

    render() {
        const { auth, post } = this.props;
        console.log(post)

        if (!auth.token) { return <Redirect to='/dashboard/' /> }
        return (
            <EditArticle post={post} />
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.auth,
        id: ownProps.match.params.id,
        post: state.article.post,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getArticle: (id) => dispatch(getArticle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);