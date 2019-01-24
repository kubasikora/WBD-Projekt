import axios from 'axios'
import {FINISHED_BETTABLE_START, 
        FINISHED_BETTABLE_ACK, 
        FINISHED_BETTABLE_ERROR} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const fetchBettableMatches = (userId) => {
    return dispatch => {
        dispatch({ type: FINISHED_BETTABLE_START });
        axios.get(`${endpoint}/bets_list?UzytkownikId=${userId}`, { crossdomain: true })
            .then(response => {
                let result = {}
                for (let i = 0; i < response.data.length; i += 2) {
                    let match = response.data[i];
                    let bet = response.data[i+1];

                    let matchObject = {
                        matchId: match[0],
                        year: match[1],
                        month: match[2],
                        day: match[3],
                        home: match[4],
                        away: match[5],
                        bet: bet,
                        tournament: match[6]
                    }

                    let tournament = match[6];
                    
                    if (!result.hasOwnProperty(tournament)){
                        result[tournament] = [];
                    }
                    result[tournament].push(matchObject);
                }
                
                dispatch({ 
                    type: FINISHED_BETTABLE_ACK,
                    payload: {
                        data: Object.values(result)
                    }
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FINISHED_BETTABLE_ERROR })
            })
    }
}

export default fetchBettableMatches;
