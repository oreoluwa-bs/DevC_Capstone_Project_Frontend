import authReducer from './authReducer'
import { combineReducers } from 'redux'
import feedReducer from './feedReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    feed: feedReducer
});

export default rootReducer;