import React from "react";
import { Grid, Tooltip, Typography, Paper } from "@material-ui/core";
import TournamentList from "./TournamentList";
import Scoretable from "./Scoretable";

class ScoretablePageView extends React.Component {
  render() {
    return (
        <div>
          <Grid container>
            <Grid item xs={3}>
              <Paper style={{height: "65vh", margin: "5px"}}>
                <TournamentList fetching={this.props.fetching}/>
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper style={{height: "65vh", margin: "5px"}}>
                <Scoretable fetching={this.props.fetching}/>
              </Paper>
            </Grid>
          </Grid>
        </div>
    );
  }
}

export default ScoretablePageView;
