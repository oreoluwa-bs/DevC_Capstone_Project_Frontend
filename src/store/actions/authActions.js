export const baseURL = 'https://rocky-waters-58005.herokuapp.com/api/v1/';

const path = 'auth';

export const signIn = (credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL+path}/signin`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'LOGIN_FAILED', data: res });
                        } else {
                            sessionStorage.setItem('userId', res.data.userId)
                            sessionStorage.setItem('userToken', res.data.token)
                            dispatch({ type: 'LOGIN_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'LOGIN_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'LOGIN_FAILED', data: err });
            });
    }
}

export const signup = (credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL+path}/create-user`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        });
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'SIGNUP_FAILED', data: res });
                        } else {
                            dispatch({ type: 'SIGNUP_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'SIGNUP_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'SIGNUP_FAILED', data: err });
            });
    }
}