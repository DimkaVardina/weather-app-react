import * as types from './actionTypes';
import axios from 'axios-jsonp-pro';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadDaysSuccess(days) {
    return { type: types.LOAD_DAYS_SUCCESS, days };
}

export function loadDays() {
    return function(dispatch) {
        dispatch(beginAjaxCall());

        axios.get('https://samples.openweathermap.org/data/2.5/forecast?q=M%C3%BCnchen,DE&appid=b6907d289e10d714a6e88b30761fae22')
            .then(function(r){
                debugger;
                dispatch(loadDaysSuccess(r.data.list))
            }).catch(e => {
                throw(e);
        });
    }
}