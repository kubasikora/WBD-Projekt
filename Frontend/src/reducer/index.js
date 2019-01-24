import { combineReducers } from "redux";
import auth from "./auth";
import finishedMatches from "./finishedMatches";
import incomingMatches from "./incomingMatches";

const rootReducer = combineReducers({
    auth,
    finishedMatches
});

export default rootReducer;


