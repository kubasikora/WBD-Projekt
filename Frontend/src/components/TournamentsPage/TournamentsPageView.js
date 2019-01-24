import React, { Fragment } from "react";
import { Grid, Tooltip, Typography, Paper, Divider } from "@material-ui/core";
import NoTournamentsEnrolled from "./NoTournamentsEnrolled";
import NoTournamentsAvailableToEnrollInfo from "./NoTournamentsAvailableToEnrollInfo";
import Loading from "../Loading";
import SignupableTournament from "./SignupableTournament";
import Cookies from "js-cookie";


class TournamentsPageView extends React.Component {
  constructor(props) {
    super(props);
    this.signUp = this.signUp.bind(this);
  }

  componentDidMount(){
    this.props.fetchSignupableTournaments(Cookies.get("loggedIn"));
  }

  signUp(tournamentId) {
    this.props.signUpForTournament(Cookies.get("loggedIn"), tournamentId);
  }

  render() {
    return (
      <div>
        <Paper style={{ height: "65vh", marginTop: "10px" }}>
          {this.props.fetching ? (<div> <div style={{ height: "25vh" }}> </div><Loading /></div>) :
            <Grid container>
              <Grid item xs={12} style={{ height: "20px" }} />
              <Grid item xs={12}>
                <div style={{ marginLeft: "20px" }}>
                  <Typography variant="h5" align="left">
                    Turnieje na które możesz się zapisać:
                </Typography>
                </div>
              </Grid>
              <Grid item xs={12} style={{ height: "20px" }} />
              {this.props.fetching ?
                <div>
                  <div style={{ height: "17vh" }} />
                  <Loading />
                </div> :
                <Fragment>
                  {this.props.data.length == 0 ?
                    <NoTournamentsAvailableToEnrollInfo />
                    : <Grid container style={{overflow : "scroll", maxHeight: "57vh"}}>
                      {this.props.data.map(el => <Grid item xs={12}><SignupableTournament signUp={this.signUp} tournamentInfo={el} /></Grid>)}
                    </Grid>}
                </Fragment>}
            </Grid>}
        </Paper>
      </div>
    );
  }
}

export default TournamentsPageView;
