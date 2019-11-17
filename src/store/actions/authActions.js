const url = 'http://localhost:5000/api/v1/auth';
export const signIn = (credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`${url}/signin`, {
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
        const request = new Request(`${url}/create-user`, {
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