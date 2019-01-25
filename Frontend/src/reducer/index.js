import { combineReducers } from "redux";
import auth from "./auth";
import finishedMatches from "./finishedMatches";
import incomingMatches from "./incomingMatches";
import tournaments from "./tournaments";
import bets from "./bets";
import history from "./history";

const rootReducer = combineReducers({
    auth,
    finishedMatches,
    incomingMatches,
    tournaments,
    bets,
    history
});

export default rootReducer;


