import {WRITE_ROUTE} from "../actions"

const initialState = {
coordinates: null
}

export const routeReducer = (state = initialState, action) => {
	switch (action.type) {
		case WRITE_ROUTE:
			return {
				...state, coordinates: action.payload
			}

		default:
			return state;
	}
}
