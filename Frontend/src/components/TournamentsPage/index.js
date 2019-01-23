import {connect} from "react-redux";
import TournamentsPageView from "./TournamentsPageView";

const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: true,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TournamentsPageView);
