import { LOGOUT } from "../const/actionTypes";
import Cookies from "js-cookie";

const logout = () => {
  Cookies.remove("loggedIn");
  return {
    type: LOGOUT
  };
};

export default logout;