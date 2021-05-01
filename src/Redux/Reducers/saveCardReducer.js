import {SAVE_CARD} from "../actions";

const initialState = {success: false}

export const saveCardReducer = (state = initialState, action) => {
	switch (action.type) {
		case SAVE_CARD: {
			return {
				success: true
			}
		}
		default:
			return state;
	}
}
