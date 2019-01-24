import {
    FINISHED_MATCHES_START,
    FINISHED_MATCHES_ACK,
    FINISHED_MATCHES_ERROR
} from "../const/actionTypes";

const initialState = {
    fetching: false,
    data: []
};

const finishedMatches = (state = initialState, action) => {
    switch (action.type) {
        case FINISHED_MATCHES_START:
            return {
                ...state,
                fetching: true
            }

        case FINISHED_MATCHES_ACK:
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            }

        case FINISHED_MATCHES_ERROR:
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

export default finishedMatches;
