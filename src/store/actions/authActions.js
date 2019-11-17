const url = 'http://localhost:5000/api/v1/auth';
export const signIn = (credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`http://localhost:5000/api/v1/auth/signin`, {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: new Headers({
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
            })
        });
        console.log(request);
        fetch(`http://localhost:5000/api/v1/auth/signin`, request)
            .then((data) => {
                dispatch({ type: 'LOGIN_SUCCESS', data });
            }).catch((err) => {
                dispatch({ type: 'LOGIN_FAILED', err });
            });
    }
}