const initState = {
}

const gifReducer = (state = initState, action) => {
    switch (action.type) {
        case 'COMMENT_GIF_FAILED':
            return {
                ...state,
            }

        case 'COMMENT_GIF_SUCCESS':
            return {
                ...state,
            }
        default:
            return state
    }
};

export default gifReducer;