import axios from 'axios'
import {
    FETCH_HISTORY_START,
    FETCH_HISTORY_ACK,
    FETCH_HISTORY_ERROR
} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const fetchHistory = () => {
    return dispatch => {
        dispatch({ type: FETCH_HISTORY_START });
        axios.get(`${endpoint}/bets_history`, { crossdomain: true })
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
                    }
                    result.push(matchInfo);
                });
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
