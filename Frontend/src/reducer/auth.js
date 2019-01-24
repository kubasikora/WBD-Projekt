import {
  AUTH_START,
  AUTH_ACK,
  AUTH_NACK,
  AUTH_ERROR,
  LOGIN,
  LOGOUT
} from "../const/actionTypes";

const initialState = {
  loggedIn: false,
  fetching: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true
      }

    case LOGOUT:
      return {
        ...state,
        loggedIn: false
      }

    case AUTH_START:
      return {
        ...state,
        fetching: true,
        wrongPass: false,
      }

    case AUTH_ACK:
      return {
        ...state,
        loggedIn: true,
        wrongPass: false,
      }

    case AUTH_NACK:
      return {
        ...state,
        loggedIn: false,
        wrongPass: true,
      }

    case AUTH_ERROR:
      return {
        ...state,
        loggedIn: true,
        error: true
      }

    default:
      return {
        ...state
      };
  }
};

export default auth;
