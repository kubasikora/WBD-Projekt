import {connect} from "react-redux";
import ScoretablePageView from "./ScoretablePageView";

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
)(ScoretablePageView);
