import {connect} from "react-redux";
import BettingPageView from "./BettingPageView";
import fetchBettableMatches from "../../actions/fetchBettableMatches";
import postBet from "../../actions/postBet";
import deleteBet from "../../actions/deleteBet";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.bets.fetching,
    data: state.bets.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchBettableMatches: (userId) => dispatch(fetchBettableMatches(userId)),
    postBet: (matchId, home, away) => dispatch(postBet(matchId, home, away)),
    deleteBet: betId => dispatch(deleteBet(betId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BettingPageView);
