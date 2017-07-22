import {combineReducers} from 'redux';
import PostReducer from './posts-reducer';

const allReducers = combineReducers({
    posts: PostReducer
});

export default allReducers;
