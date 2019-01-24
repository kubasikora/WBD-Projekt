import {connect} from "react-redux";
import TournamentsPageView from "./TournamentsPageView";
import signUpForTournament from "../../actions/signUpForTournament";
import fetchSignupableTournaments from "../../actions/fetchSignupableTournaments";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.tournaments.fetching,
    data: state.tournaments.data

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUpForTournament: (userId, tournamentId) => dispatch(signUpForTournament(tournamentId, userId)),
    fetchSignupableTournaments: (userId) => dispatch(fetchSignupableTournaments(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentsPageView);
