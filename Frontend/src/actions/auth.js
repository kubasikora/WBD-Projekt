import axios from 'axios'
import {
    AUTH_START,
    AUTH_ACK,
    AUTH_NACK,
    AUTH_ERROR
} from "../const/actionTypes";

import endpoint from "../const/endpoint";
import Cookies from "js-cookie";

const auth = (login, password) => {
    return dispatch => {
        dispatch({ type: AUTH_START });
        axios.get(`${endpoint}/sign_in?login=${login}&password=${password}`, { crossdomain: true })
            .then(response => {
                if (response.data !== null) {
                    console.log(response);
                    Cookies.set("loggedIn", response.data[0], { expires: 1 });
                    dispatch({
                        type: AUTH_ACK
                    })
                }
                else {
                    alert("Zły login lub hasło");
                    dispatch({
                        type: AUTH_NACK
                    })
                }
            })
            .catch(error => {
                console.log(error);
                dispatch({ type: AUTH_ERROR })
            })
    }
}

export default auth;
