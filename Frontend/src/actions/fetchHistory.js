import axios from 'axios'
import {
    FETCH_HISTORY_START,
    FETCH_HISTORY_ACK,
    FETCH_HISTORY_ERROR
} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const fetchHistory = (userId) => {
    return dispatch => {
        dispatch({ type: FETCH_HISTORY_START });
        axios.get(`${endpoint}/bets_history?UzytkownikId=${userId}`, { crossdomain: true })
            .then(response => {
                let result = []
                for (let i = 0; i < response.data.length; i += 2) {
                    let bet = response.data[i];
                    let match = response.data[i+1];

                    let matchInfo = {
                        home: match[0],
                        away: match[1],
                    }

                    let betObject = {
                        homeGoals: bet[1],
                        awayGoals: bet[2]
                    }
                    
                    let resultObject = {
                        homeGoals: match[2],
                        awayGoals: match[3]
                    }

                    let entryObject = {
                        matchInfo,
                        betObject,
                        resultObject
                    }

                    result.push(entryObject);
                }


                dispatch({
                    type: FETCH_HISTORY_ACK,
                    payload: {
                        data: result
                    }
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_HISTORY_ERROR })
            })
    }
}

export default fetchHistory;
