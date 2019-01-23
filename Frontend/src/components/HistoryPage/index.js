import {connect} from "react-redux";
import HistoryPageView from "./HistoryPageView";

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
)(HistoryPageView);
