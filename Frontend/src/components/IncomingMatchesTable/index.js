import {connect} from "react-redux";
import IncomingMatchesTableView from "./IncomingMatchesTableView";
import fetchIncomingMatches from "../../actions/fetchIncomingMatches";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: false,
    data: []
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchIncomingMatches: () => dispatch(fetchIncomingMatches())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomingMatchesTableView);
