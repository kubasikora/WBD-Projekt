import axios from 'axios'
import {
    SIGNUP_TOURNAMENT_START,
    SIGNUP_TOURNAMENT_ACK,
    SIGNUP_TOURNAMENT_ERROR
} from "../const/actionTypes";
import fetchSignupableTournaments from "./fetchSignupableTournaments";

import endpoint from "../const/endpoint";

const signUpForTournament = (tournamentId, userId) => {
    return dispatch => {
        dispatch({ type: SIGNUP_TOURNAMENT_START });
        axios.get(`${endpoint}/tournaments_sign_up?TurniejId=${tournamentId}&UzytkownikId=${userId}`, { crossdomain: true })
            .then(response => { 
                dispatch({
                    type: SIGNUP_TOURNAMENT_ACK,
                })
                alert("Pomyślnie zapisano na turniej!");
                dispatch(fetchSignupableTournaments(userId));
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: SIGNUP_TOURNAMENT_ERROR })
            })
    }
}

export default signUpForTournament;
