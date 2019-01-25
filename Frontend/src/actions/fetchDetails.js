import axios from 'axios'
import {
    FETCH_DETAILS_START,
    FETCH_DETAILS_ACK,
    FETCH_DETAILS_ERROR
} from "../const/actionTypes";

import endpoint from "../const/endpoint";

const pad = d => {
    return (d < 10) ? '0' + d.toString() : d.toString();
}

const fetchDetails = (matchId) => {
    return dispatch => {
        dispatch({ type: FETCH_DETAILS_START });
        axios.get(`${endpoint}/show_details?MeczId=${matchId}`, { crossdomain: true })
            .then(response => {
                let i = response.data;
                dispatch({
                    type: FETCH_DETAILS_ACK
                });
                let data = `${pad(i[3])}.${pad(i[2])}.${i[1]}\n${i[4]} - ${i[5]}\nTurniej: ${i[6]} \nSędzia spotkania: ${i[7]} ${i[8]}\nStadion: ${i[9]}(${i[10]})`
                alert(data);
            })
            
            .catch(error => {
                console.log(error);
                dispatch({ type: FETCH_DETAILS_ERROR })
            })
    }
}

export default fetchDetails;
