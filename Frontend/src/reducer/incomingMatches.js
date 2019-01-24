import {
    INCOMING_MATCHES_START,
    INCOMING_MATCHES_ACK,
    INCOMING_MATCHES_ERROR
} from "../const/actionTypes";

const initialState = {
    fetching: false,
    data: []
};

const incomingMatches = (state = initialState, action) => {
    switch (action.type) {
        case INCOMING_MATCHES_START:
            return {
                ...state,
                fetching: true
            }

        case INCOMING_MATCHES_ACK:
            return {
                ...state,
                fetching: false,
                data: action.payload.data
            }

        case INCOMING_MATCHES_ERROR:
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

export default incomingMatches;
