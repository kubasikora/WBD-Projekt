import axios from 'axios'
import {
    DELETE_BET_START,
    DELETE_BET_ACK,
    DELETE_BET_ERROR
} from "../const/actionTypes";
import fetchBettableMatches from "./fetchBettableMatches";

import endpoint from "../const/endpoint";
import Cookies from "js-cookie";

const deleteBet = (betId) => {
    return dispatch => {
        dispatch({ type: DELETE_BET_START });
        axios.get(`${endpoint}/delete_bet?ZakladId=${betId}`, { crossdomain: true })
            .then(response => {
                dispatch({
                    type: DELETE_BET_ACK
                });
                dispatch(fetchBettableMatches(Cookies.get("loggedIn")));
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: DELETE_BET_ERROR })
            })
    }
}

export default deleteBet;
