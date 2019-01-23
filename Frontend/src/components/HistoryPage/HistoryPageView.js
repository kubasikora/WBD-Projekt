import React, { Fragment } from "react";
import { Grid, Tooltip, Typography, Paper, Card, CardContent } from "@material-ui/core";

import HistoryEntry from "./HistoryEntry";
import Loading from "../Loading";

class HistoryPageView extends React.Component {
  render() {
    return (
      <Fragment>
        {this.props.fetching ? <div> <div style={{ height: "25vh" }}> </div><Loading /></div> :
          <div>
            <HistoryEntry />
            <HistoryEntry />
            <HistoryEntry />
            <HistoryEntry />
          </div>}
      </Fragment>
    );
  }
}

export default HistoryPageView;
