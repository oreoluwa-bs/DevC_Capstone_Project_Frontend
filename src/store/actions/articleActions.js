import { baseURL } from './authActions';

const path = 'articles';

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
                            dispatch({ type: 'COMMENT_ARTICLE_FAILED', data: res });
                        } else {
                            dispatch({ type: 'COMMENT_ARTICLE_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'COMMENT_ARTICLE_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'COMMENT_ARTICLE_FAILED', data: err });
            });
    }
}


export const getArticle = (id) => {
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
                            dispatch({ type: 'GET_ARTICLE_FAILED', data: res });
                        } else {
                            dispatch({ type: 'GET_ARTICLE_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'GET_ARTICLE_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'GET_ARTICLE_FAILED', data: err });
            });
    }
}

export const createArticle = (credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}/`, {
            method: 'POST',
            body: JSON.stringify({
                title: credentials.title,
                article: credentials.article
            }),
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
                            dispatch({ type: 'CREATE_ARTICLE_FAILED', data: res });
                        } else {
                            dispatch({ type: 'CREATE_ARTICLE_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'CREATE_ARTICLE_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'CREATE_ARTICLE_FAILED', data: err });
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
                            dispatch({ type: 'DELETE_ARTICLE_FAILED', data: res });
                        } else {
                            dispatch({ type: 'DELETE_ARTICLE_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'DELETE_ARTICLE_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'DELETE_ARTICLE_FAILED', data: err });
            });
    }
}

export const editArticle = (id, credentials) => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify({
                title: credentials.title,
                article: credentials.article
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${sessionStorage.getItem('userToken')}`
            })
        });
        console.log(id, credentials)
        fetch(request)
            .then((response) => {
                response.json()
                    .then((res) => {
                        if (res.status === 'error') {
                            dispatch({ type: 'EDIT_ARTICLE_FAILED', data: res });
                        } else {
                            dispatch({ type: 'EDIT_ARTICLE_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'EDIT_ARTICLE_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'EDIT_ARTICLE_FAILED', data: err });
            });
    }
}