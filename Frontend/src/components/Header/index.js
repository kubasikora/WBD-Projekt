import {connect} from "react-redux";
import HeaderView from "./HeaderView";

import logout from "../../actions/logout";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);
