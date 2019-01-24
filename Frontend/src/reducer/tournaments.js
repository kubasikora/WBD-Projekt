import {
    SIGNUP_TOURNAMENT_START,
    SIGNUP_TOURNAMENT_ACK,
    SIGNUP_TOURNAMENT_ERROR,
    FETCH_SIGNUPABLE_TOURNAMENT_START,
    FETCH_SIGNUPABLE_TOURNAMENT_ACK,
    FETCH_SIGNUPABLE_TOURNAMENT_ERROR
} from "../const/actionTypes";

const initialState = {
    fetching: false,
    data: []
};

const tournaments = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_TOURNAMENT_START:
            return {
                ...state,
                fetching: true
            }

        case SIGNUP_TOURNAMENT_ACK:
            return {
                ...state,
                fetching: false,
            }

        case SIGNUP_TOURNAMENT_ERROR:
            return {
                ...state,
                fetching: false
            }

        case FETCH_SIGNUPABLE_TOURNAMENT_START:
            return {
                ...state,
                fetching: true
            }

        case FETCH_SIGNUPABLE_TOURNAMENT_ACK:
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            }

        case FETCH_SIGNUPABLE_TOURNAMENT_ERROR:
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
