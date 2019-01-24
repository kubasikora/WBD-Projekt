import React from "react";
import { Grid, Tooltip, Typography, Paper, Divider } from "@material-ui/core";
import NoTournamentsEnrolled from "./ NoTournamentsEnrolled";
import NoTournamentsAvailableToEnrollInfo from "./NoTournamentsAvailableToEnrollInfo";
import Loading from "../Loading";
import SignupableTournament from "./SignupableTournament";


class TournamentsPageView extends React.Component {
  render() {
    return (
      <div>
        <Paper style={{ height: "65vh", marginTop: "10px" }}>
          {this.props.fetching ? (<div> <div style={{ height: "25vh" }}> </div><Loading /></div>) :
            <Grid container>
              <Grid item xs={12} style={{ height: "30px" }} />
              <Grid item xs={12}>
                <div style={{ marginLeft: "10px" }}>
                  <Typography variant="h5" align="left">
                    Turnieje na które możesz się zapisać:
              </Typography>
                </div>
              </Grid>
              <SignupableTournament />
              <SignupableTournament />
              {/*<NoTournamentsAvailableToEnrollInfo />*/}
            </Grid>}
        </Paper>
      </div>
    );
  }
}

export default TournamentsPageView;
