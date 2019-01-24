import axios from 'axios'
import {
    FETCH_SIGNUPABLE_TOURNAMENT_START,
    FETCH_SIGNUPABLE_TOURNAMENT_ACK,
    FETCH_SIGNUPABLE_TOURNAMENT_ERROR
} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const fetchSignupableTournaments = (userId) => {
    return dispatch => {
        dispatch({ type: FETCH_SIGNUPABLE_TOURNAMENT_START });
        axios.get(`${endpoint}/tournament_list?UzytkownikId=${userId}`, { crossdomain: true })
            .then(response => { 
                let result = []
                response.data.forEach(el => {
                    let tournamentInfo = {
                        tournamentId: el[0],
                        tournamentName: el[1],
                        year: el[2],
                        month: el[3],
                        day: el[4]
                    }
                    result.push(tournamentInfo);
                });
                dispatch({
                    type: FETCH_SIGNUPABLE_TOURNAMENT_ACK,
                    payload: {
                        data: result
                    }
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_SIGNUPABLE_TOURNAMENT_ERROR })
            })
    }
}

export default fetchSignupableTournaments;
