import {
    FINISHED_BETTABLE_START,
    FINISHED_BETTABLE_ACK,
    FINISHED_BETTABLE_ERROR
} from "../const/actionTypes";

const initialState = {
    fetching: false,
    data: []
};

const bets = (state = initialState, action) => {
    switch (action.type) {
        case FINISHED_BETTABLE_START:
            return {
                ...state,
                fetching: true
            }

        case FINISHED_BETTABLE_ACK:
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            }

        case FINISHED_BETTABLE_ERROR:
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

export default bets;
