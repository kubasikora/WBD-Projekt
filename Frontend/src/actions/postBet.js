import axios from 'axios'
import {
    POST_BET_START,
    POST_BET_ACK,
    POST_BET_ERROR
} from "../const/actionTypes";
import fetchBettableMatches from "./fetchBettableMatches";

import endpoint from "../const/endpoint";
import Cookies from "js-cookie";

const postBet = (home, away, match) => {
    return dispatch => {
        dispatch({ type: POST_BET_START });
        axios.get(`${endpoint}/add_bet?UzytkownikId=${Cookies.get("loggedIn")}&WynikGosp=${home}&WynikGosc=${away}&MeczId=${match}`, { crossdomain: true })
            .then(response => {
                dispatch({
                    type: POST_BET_ACK
                });
                dispatch(fetchBettableMatches(Cookies.get("loggedIn")));
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: POST_BET_ERROR })
            })
    }
}

export default postBet;
