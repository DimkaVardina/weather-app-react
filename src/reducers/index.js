import { combineReducers } from 'redux';
import days from './daysReducer';
import location from './locationReducer';
import ajaxCallInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    days,
    location,
    ajaxCallInProgress
});

export default rootReducer;