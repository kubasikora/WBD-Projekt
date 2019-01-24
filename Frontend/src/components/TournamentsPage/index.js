import {connect} from "react-redux";
import TournamentsPageView from "./TournamentsPageView";
import signUpForTournament from "../../actions/signUpForTournament";

const mapStateToProps = (state, ownProps) => {
  return {
    fetching: state.tournaments.fetching,
    data: state.tournaments.data

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signUpForTournament: (userId, tournamentId) => dispatch(signUpForTournament(userId, tournamentId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentsPageView);
