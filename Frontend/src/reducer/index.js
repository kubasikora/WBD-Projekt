import { combineReducers } from "redux";
import auth from "./auth";
import finishedMatches from "./finishedMatches";
import incomingMatches from "./incomingMatches";
import tournaments from "./tournaments";
import bets from "./bets";

const rootReducer = combineReducers({
    auth,
    finishedMatches,
    incomingMatches,
    tournaments,
    bets
});

export default rootReducer;


