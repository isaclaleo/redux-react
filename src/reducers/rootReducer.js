import { combineReducers } from "redux-immutable";
import dataReducer from "../slices/dataSlice";


const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;