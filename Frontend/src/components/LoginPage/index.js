import {connect} from "react-redux";
import LoginPageView from "./LoginPageView";

import login from "../../actions/login";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.auth.fetching
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
