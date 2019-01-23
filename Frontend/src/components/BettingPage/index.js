import {connect} from "react-redux";
import BettingPageView from "./BettingPageView";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BettingPageView);
