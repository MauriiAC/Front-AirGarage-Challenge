import axios from 'axios';
export const SEARCH_PARKINGS = 'SEARCH_PARKINGS';
export const SEARCHING = 'SEARCHING';
export const SEARCH_ERR = 'SEARCH_ERR';
export const CLEAN_ERR = 'CLEAN_ERR';

export function searchParkings(data) {
	return function (dispatch) {
        dispatch({ type: SEARCHING })
		return axios.get(`https://back-air-garage-challenge.herokuapp.com/search?location=${data}`)
        .then(
            res => {
                dispatch({type: SEARCH_PARKINGS, payload: res.data});
            },
            err => {
                dispatch({type: SEARCH_ERR});
            }
        );
    };
}

export function cleanErr(){
    return function(dispatch){
        dispatch({ type: CLEAN_ERR })
    }
}