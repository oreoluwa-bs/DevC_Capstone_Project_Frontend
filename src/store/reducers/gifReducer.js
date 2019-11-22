const initState = {
    notification: {
        status: null,
        message: null,
    },
    post: {
        comments: [],
    }
}

const gifReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_GIF_FAILED':
            return {
                ...state,
            }

        case 'GET_GIF_SUCCESS':
            return {
                ...state,
                post: action.data.data
            }
        case 'COMMENT_GIF_FAILED':
            return {
                ...state,
                notification: {
                    status: 'error',
                    message: 'Comment on post failed'
                },
            }

        case 'COMMENT_GIF_SUCCESS':
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

export default gifReducer;