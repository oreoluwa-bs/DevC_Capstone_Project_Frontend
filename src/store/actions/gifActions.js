import { baseURL } from './authActions';

const path = 'gifs';

export const commentPost = (id, comment) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}/${id}/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
            })
        });
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'COMMENT_GIF_FAILED', data: res });
                        } else {
                            dispatch({ type: 'COMMENT_GIF_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'COMMENT_GIF_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'COMMENT_GIF_FAILED', data: err });
            });
    }
}

export const getGif = (id) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}/${id}`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
            })
        });
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'GET_GIF_FAILED', data: res });
                        } else {
                            dispatch({ type: 'GET_GIF_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'GET_GIF_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'GET_GIF_FAILED', data: err });
            });
    }
}


export const createGif = (credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}`, {
            method: 'POST',
            body: JSON.stringify({
                title: credentials.title,
                image: credentials.imageFile
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
            }),
        });
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'CREATE_GIF_FAILED', data: res });
                        } else {
                            dispatch({ type: 'CREATE_GIF_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'CREATE_GIF_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'CREATE_GIF_FAILED', data: err });
            });
    }
}

export const deletePost = (id) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}/${id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
            })
        });
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'DELETE_GIF_FAILED', data: res });
                        } else {
                            dispatch({ type: 'DELETE_GIF_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'DELETE_GIF_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'DELETE_GIF_FAILED', data: err });
            });
    }
}