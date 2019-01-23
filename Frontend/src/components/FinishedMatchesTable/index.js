import {connect} from "react-redux";
import FinishedMatchesTableView from "./FinishedMatchesTableView";

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
)(FinishedMatchesTableView);
