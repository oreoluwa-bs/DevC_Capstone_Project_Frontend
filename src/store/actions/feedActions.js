import { baseURL } from './authActions';

const path = 'feed';

export const getFeed = () => {
    return (dispatch, getState) => {
        const request = new Request(`${baseURL + path}`, {
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
                            dispatch({ type: 'GET_FEED_FAILED', data: res });
                        } else {
                            dispatch({ type: 'GET_FEED_SUCCESS', data: res });
                        }
                    })
                    .catch((err) => {
                        dispatch({ type: 'GET_FEED_FAILED', data: err });
                    });
            }).catch((err) => {
                dispatch({ type: 'GET_FEED_FAILED', data: err });
            });
    }
}

