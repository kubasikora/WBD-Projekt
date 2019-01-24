import {connect} from "react-redux";
import TournamentsPageView from "./TournamentsPageView";

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
)(TournamentsPageView);
