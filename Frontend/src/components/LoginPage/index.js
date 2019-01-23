import {connect} from "react-redux";
import LoginPageView from "./LoginPageView";

import login from "../../actions/login";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    login: () => dispatch(login())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPageView);
