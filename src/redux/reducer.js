import {
	SEARCH_PARKINGS, SEARCHING
} from './actions';

const initialState = {
    parkingList: [],
	searching: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_PARKINGS:
			return {...state, parkingList: action.payload, searching: false};
		
		case SEARCHING:
			return {...state, searching: true}

		default:
			return state;
	}
};

export default reducer;