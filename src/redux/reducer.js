import {
	SEARCH_PARKINGS, SEARCHING, SEARCH_ERR, CLEAN_ERR
} from './actions';

const initialState = {
    parkingList: [],
	searching: false,
	errSearch: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_PARKINGS:
			return {...state, parkingList: action.payload, searching: false, errSearch: false};
		
		case SEARCHING:
			return {...state, searching: true}

		case SEARCH_ERR:
			return {...state, parkingList: [], searching: false, errSearch: true}

		case CLEAN_ERR:
			return {...state, errSearch: false}

		default:
			return state;
	}
};

export default reducer;