import React, { Component } from 'react';
import ArticlePostSmall from '../components/post/ArticlePostSmall';
import GifPostSmall from '../components/post/GifPostSmall';
import { connect } from 'react-redux'
import { getFeed } from '../store/actions/feedActions'
import '../styles/feed.css'

class FeedPage extends Component {
    state = {}
    componentDidMount() {
        this.props.getFeed();
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.props.getFeed();
        return true
    }
    render() {
        const { posts } = this.props;
        return (
            <div className='feed-container'>
                <h5>My Feed</h5>
                <br></br>
                {
                    posts.map((post) => {
                        if (!post.imageUrl) {
                            return <ArticlePostSmall
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                article={post.article}
                                authorId={post.authorId} 
                                authorName = {post.authorName}/>
                        } else {
                            return <GifPostSmall
                                key={post.id}
                                id={post.id}
                                title={post.title}
                                imageUrl={post.imageUrl}
                                authorId={post.authorId} 
                                authorName = {post.authorName}/>
                        }
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.feed.posts,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        getFeed: () => dispatch(getFeed())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);