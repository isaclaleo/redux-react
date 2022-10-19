import { fromJS } from "immutable";
import { SET_LOADING } from "../actions/types";

const initialstate = fromJS({
    loading: false,
});

export const uiReducers = ( state = initialstate, action) => {
    switch (action.type) {
        case SET_LOADING: 
        return { ...state, loading: action.payload};
        default:
            return state;
    }
}