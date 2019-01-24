import {connect} from "react-redux";
import IncomingMatchesTableView from "./IncomingMatchesTableView";

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
)(IncomingMatchesTableView);
