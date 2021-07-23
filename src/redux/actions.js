import axios from 'axios';
export const SEARCH_PARKINGS = 'SEARCH_PARKINGS';
export const SEARCHING = 'SEARCHING';
export const SEARCH_ERR = 'SEARCH_ERR';
export const CLEAN_ERR = 'CLEAN_ERR';

export function searchParkings(data) {
    console.log('entro a la action searchPar...')
	return function (dispatch) {
        dispatch({ type: SEARCHING })
		return axios.get(`https://back-air-garage-challenge.herokuapp.comc/search?location=${data}`)
        .then(
            res => {
                dispatch({type: SEARCH_PARKINGS, payload: res.data});
            },
            err => {
                dispatch({type: SEARCH_ERR});
                console.log(err);
            }
        );
    };
}

export function cleanErr(){
    console.log('entro a la action cleanErr')
    return function(dispatch){
        dispatch({ type: CLEAN_ERR })
    }
}