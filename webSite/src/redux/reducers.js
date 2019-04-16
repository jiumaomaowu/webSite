import {combineReducers} from "redux";

import reducer from 'reducers/Header';
import blog from 'reducers/Blog';

import Desc from 'reducers/Description';

export default combineReducers({
    reducer,
    blog,
    Desc
    
});