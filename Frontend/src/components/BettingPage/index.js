import {connect} from "react-redux";
import BettingPageView from "./BettingPageView";
import fetchBettableMatches from "../../actions/fetchBettableMatches";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.bets.fetching,
    data: state.bets.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBettableMatches: (userId) => dispatch(fetchBettableMatches(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BettingPageView);
