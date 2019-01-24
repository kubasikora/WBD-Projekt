import {
    SIGNUP_TOURNAMENT_START,
    SIGNUP_TOURNAMENT_ACK,
    SIGNUP_TOURNAMENT_ERROR
} from "../const/actionTypes";

const initialState = {
    fetching: false,
    data: [{
        tournamentId: 1,
        name: "Tournament 1",
        startDateYear: 2019,
        startDateMonth: 1,
        startDateDay: 30
    }]
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
                data: action.payload.data
            }

        case SIGNUP_TOURNAMENT_ERROR:
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
