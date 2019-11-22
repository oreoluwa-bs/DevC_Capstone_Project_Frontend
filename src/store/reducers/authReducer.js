const user = sessionStorage.getItem('userToken');
let auth = null;
if (user) {
    auth = {
        userId: sessionStorage.getItem('userId'),
        token: user
    }
} else {
    auth = {
        userId: null,
        token: null
    };
}
const initState = {
    notification: {
        status: null,
        message: null,
    },
    authError: null,
    auth,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_FAILED':
            return {
                ...state,
                authError: action.data.message,
                notification: action.data
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                auth: action.data.data,
                authError: null,
                notification: action.data,
            }

        case 'SIGNOUT_SUCCESS':
            sessionStorage.removeItem('userToken');
            sessionStorage.removeItem('userId');
            return {
                ...state,
                authError: null,
                auth: {
                    userId: null,
                    token: null
                },
            }

        case 'SIGNUP_SUCCESS':
            console.log('Signup succesful');
            return {
                ...state,
                auth: action.data.data,
                authError: null,
                notification: action.data
            }

        case 'SIGNUP_FAILED':
            console.log('Signup unsuccessful');
            return {
                ...state,
                authError: action.data.message,
                notification: action.data
            }

        default:
            return state
    }
};

export default authReducer;