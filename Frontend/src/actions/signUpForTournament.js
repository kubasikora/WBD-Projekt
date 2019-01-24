import axios from 'axios'
import {
    SIGNUP_TOURNAMENT_START,
    SIGNUP_TOURNAMENT_ACK,
    SIGNUP_TOURNAMENT_ERROR
} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const signUpForTournament = (tournamentId, userId) => {
    return dispatch => {
        dispatch({ type: SIGNUP_TOURNAMENT_START });
        axios.get(`${endpoint}/tournaments?TurniejId=${tournamentId}&UzytkownikId=${userId}`, { crossdomain: true })
            .then(response => { 
                dispatch({
                    type: SIGNUP_TOURNAMENT_ACK,
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: SIGNUP_TOURNAMENT_ERROR })
            })
    }
}

export default signUpForTournament;
