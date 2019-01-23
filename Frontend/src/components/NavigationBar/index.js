import {connect} from "react-redux";
import NavigationBarView from "./NavigationBarView";


const mapStateToProps = (state, ownProps) => {
  return {
    loggedIn: state.auth.loggedIn
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavigationBarView);