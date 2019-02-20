import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function daysReducer(state = [], action) {
    switch (action.type) {
        case types.LOAD_DAYS_SUCCESS:
            return action.days;
        
        default:
            return state;
    }
}