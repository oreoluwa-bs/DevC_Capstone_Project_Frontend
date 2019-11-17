const initState = {
    authError: null,
    auth: {
        userId: null,
        token: null
    }
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            // console.log('Login unsuccessful');
            return {
                ...state,
                authError: action.data.message
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                auth: action.data.data,
                authError: null
            }

        case 'SIGNOUT_SUCCESS':
            console.log('Logout successful');
            return state

        case 'SIGNUP_SUCCESS':
            console.log('Signup succesful');
            return {
                ...state,
                auth: action.data.data,
                authError: null
            }

        case 'SIGNUP_FAILED':
            console.log('Signup unsuccessful');
            return {
                ...state,
                authError: action.data.message
            }

        default:
            return state
    }
};

export default authReducer;