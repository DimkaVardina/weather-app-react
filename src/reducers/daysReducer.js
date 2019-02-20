import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 *  Days reducer
 * 
 * loads information for next 5 days devided into 3 hours periods
 *
 * @reducer
 */
export default function daysReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_DAYS_SUCCESS:
            return action.days;
        
        default:
            return state;
    }
}