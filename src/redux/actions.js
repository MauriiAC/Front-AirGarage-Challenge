import axios from 'axios';
export const SEARCH_PARKINGS = 'SEARCH_PARKINGS';
export const SEARCHING = 'SEARCHING';

export function searchParkings(data) {
	return function (dispatch) {
        dispatch({ type: SEARCHING })
		return axios.get(`http://localhost:3001/search?location=${data}`)
        .then(
            res => {
                dispatch({type: SEARCH_PARKINGS, payload: res.data});
            },
            err => {
                console.log(err);
            }
        );
    };
}