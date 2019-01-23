import React from "react";
import { Grid, Tooltip, Typography } from "@material-ui/core";
import Tournament from "./Tournament";
import NoTournamentsAvailableInfo from "./NoTournamentsAvailableInfo";
import Loading from "../Loading";

class BettingPageView extends React.Component {
  render() {
    return (
      <div>
        {this.props.fetching ? <div> <div style={{height: "25vh"}}> </div><Loading/></div>: 
         <Tournament />
        }
      </div>
    );
  }
}

export default BettingPageView;
