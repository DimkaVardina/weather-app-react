import { combineReducers } from 'redux';
import days from './daysReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    days,
    ajaxCallInProgress
});

export default rootReducer;