import {
    FINISHED_BETTABLE_START,
    FINISHED_BETTABLE_ACK,
    FINISHED_BETTABLE_ERROR,
    POST_BET_START,
    POST_BET_ACK,
    POST_BET_ERROR,
    DELETE_BET_START,
    DELETE_BET_ACK,
    DELETE_BET_ERROR
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

        case POST_BET_START:
            return {
                ...state,
                fetching: true
            }

        case POST_BET_ACK:
            return {
                ...state,
                fetching: false,
            }

        case POST_BET_ERROR:
            return {
                ...state,
                fetching: false
            }

        case DELETE_BET_START:
            return {
                ...state,
                fetching: true
            }

        case DELETE_BET_ACK:
            return {
                ...state,
                fetching: false,
            }

        case DELETE_BET_ERROR:
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
