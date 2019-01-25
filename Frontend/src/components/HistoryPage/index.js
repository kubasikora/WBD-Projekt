import {connect} from "react-redux";
import HistoryPageView from "./HistoryPageView";
import fetchHistory from "../../actions/fetchHistory";
import Cookies from "js-cookie";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.history.fetching,
    data: state.history.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchHistory: () => dispatch(fetchHistory(Cookies.get("loggedIn")))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPageView);
