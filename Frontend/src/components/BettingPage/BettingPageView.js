import React from "react";
import { Grid, Tooltip, Typography } from "@material-ui/core";
import Tournament from "./Tournament";


class BettingPageView extends React.Component {
  render() {
    return (
      <div>
        <Tournament />
      </div>
    );
  }
}

export default BettingPageView;
