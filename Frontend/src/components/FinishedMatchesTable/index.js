import {connect} from "react-redux";
import FinishedMatchesTableView from "./FinishedMatchesTableView";
import fetchFinishedMatches from "../../actions/fetchFinishedMatches";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.finishedMatches.fetching,
    data: state.finishedMatches.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchFinishedMatches: () => dispatch(fetchFinishedMatches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinishedMatchesTableView);
