import {connect} from "react-redux";
import IncomingMatchesTableView from "./IncomingMatchesTableView";
import fetchIncomingMatches from "../../actions/fetchIncomingMatches";
import signUpForTournament from "../../actions/signUpForTournament";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.incomingMatches.fetching,
    data: state.incomingMatches.data
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchIncomingMatches: () => dispatch(fetchIncomingMatches()),
    signUp: (tournamentId,userId) => dispatch(signUpForTournament(tournamentId,userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IncomingMatchesTableView);
