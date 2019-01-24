import {connect} from "react-redux";
import LoginPageView from "./LoginPageView";

import auth from "../../actions/auth";


const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.auth.fetching
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: (login, password) => dispatch(auth(login, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageView);
