import axios from 'axios'
import {FINISHED_MATCHES_START, 
        FINISHED_MATCHES_ACK, 
        FINISHED_MATCHES_ERROR} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const fetchFinishedMatches = () => {
    return dispatch => {
        dispatch({ type: FINISHED_MATCHES_START });
        axios.get(`${endpoint}/finished_matches`, { crossdomain: true })
            .then(response => {
                let result = []
                response.data.forEach(el => {
                    let matchInfo = {
                        matchId: el[0],
                        year: el[1],
                        month: el[2],
                        day: el[3],
                        home: el[4],
                        away: el[5],
                        stadium: el[6],
                        ref: el[7] + " " + el[8],
                        tournament: el[9],
                        homeGoals: el[10],
                        awayGoals: el[11]
                    }
                    result.push(matchInfo);
                });
                dispatch({ 
                    type: FINISHED_MATCHES_ACK,
                    payload: {
                        data: result
                    }
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FINISHED_MATCHES_ERROR })
            })
    }
}

export default fetchFinishedMatches;
