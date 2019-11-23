const initState = {
    notification: {
        status: null,
        message: null,
    },
    post: {
        comments: [],
    }
}

const articleReducer = (state = initState, action) => {
    switch (action.type) {
        case 'EDIT_ARTICLE_FAILED':
            return {
                ...state,
                notification: {
                    status: 'error',
                    message: 'Article failed to edit'
                },
            }
        case 'EDIT_ARTICLE_SUCCESS':
            return {
                ...state,
                notification: {
                    status: 'success',
                    message: 'You have edited an article'
                },
            }
        case 'CREATE_ARTICLE_FAILED':
            return {
                ...state,
                notification: {
                    status: 'error',
                    message: 'Article failed to post'
                },
            }
        case 'DELETE_ARTICLE_SUCCESS':
            return {
                ...state,
                notification: {
                    status: 'success',
                    message: 'You have deleted an article'
                },
            }
        case 'DELETE_ARTICLE_FAILED':
            return {
                ...state,
                notification: {
                    status: 'error',
                    message: 'Article failed to delete'
                },
            }
        case 'CREATE_ARTICLE_SUCCESS':
            return {
                ...state,
                notification: {
                    status: 'success',
                    message: 'You have posted an article'
                },
            }
        case 'GET_ARTICLE_FAILED':
            return {
                ...state,
            }

        case 'GET_ARTICLE_SUCCESS':
            return {
                ...state,
                post: action.data.data
            }
        case 'COMMENT_ARTICLE_FAILED':
            return {
                ...state,
                notification: {
                    status: 'error',
                    message: 'Comment on post failed'
                },
            }

        case 'COMMENT_ARTICLE_SUCCESS':
            return {
                ...state,
                notification: {
                    status: 'success',
                    message: 'You have commented on this post'
                },
            }
        default:
            return state
    }
};

export default articleReducer;