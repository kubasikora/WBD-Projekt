import {connect} from "react-redux";
import ScoretablePageView from "./ScoretablePageView";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false
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
