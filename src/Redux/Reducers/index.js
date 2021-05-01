import { combineReducers } from "redux";
import {loginReducer} from "./LoginReducer";
import {saveTokenReducer} from "./saveTokenReducer";
import {saveCardReducer} from "./saveCardReducer";
import {routeReducer} from "./RouteReducer";

const rootReducer = combineReducers(
	{
		login: loginReducer,
		saveToken: saveTokenReducer,
		saveCard: saveCardReducer,
		route: routeReducer
	}
)
export default rootReducer