import authReducer from './authReducer'
import { combineReducers } from 'redux'
import feedReducer from './feedReducer';
import gifReducer from './gifReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    feed: feedReducer,
    gif: gifReducer,
    article: articleReducer
});

export default rootReducer;