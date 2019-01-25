import {
    FETCH_HISTORY_START,
    FETCH_HISTORY_ACK,
    FETCH_HISTORY_ERROR
} from "../const/actionTypes";

const initialState = {
    fetching: false,
    data: []
};

const tournaments = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_HISTORY_START:
            return {
                ...state,
                fetching: true
            }

        case FETCH_HISTORY_ACK:
            return {
                ...state,
                fetching: false,
            }

        case FETCH_HISTORY_ERROR:
            return {
                ...state,
                fetching: false
            }

        default:
            return {
                ...state
            };
    }
};

export default tournaments;
