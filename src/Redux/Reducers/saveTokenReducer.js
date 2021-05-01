import {SAVE_TOKEN} from "../actions";

const initialState = {
	token: null
}

export const saveTokenReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_TOKEN:
			return {...state, token: action.payload}
		default:
			return state;
	}
}