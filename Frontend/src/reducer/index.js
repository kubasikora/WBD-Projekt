import { combineReducers } from "redux";
import auth from "./auth";
import finishedMatches from "./finishedMatches";
import incomingMatches from "./incomingMatches";
import tournaments from "./tournaments";

const rootReducer = combineReducers({
    auth,
    finishedMatches,
    incomingMatches,
    tournaments
});

export default rootReducer;


