import * as types from '../actions/actionTypes';
import initialState from './initialState';

/**
 * Localization reducer
 *
 * @reducer
 */
export default function locationReducer(state = [], action) {
    switch (action.type) {
        case types.UPDATE_LOCATION_SUCCESS:
            return [
                ...state,
                Object.assign({}, action.location)
            ];
        
        case types.LOAD_LOCATION:
            return action.location
        
        default:
            return state;
    }
}