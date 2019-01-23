import {connect} from "react-redux";
import ResultsPageView from "./ResultsPageView";

const mapStateToProps = (state, ownProps) => {
  return {
    isFetching: true
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsPageView);
