import React, { Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import HistoryEntry from "./HistoryEntry";
import Loading from "../Loading";

class HistoryPageView extends React.Component {

  componentDidMount(){
    this.props.fetchHistory();
  }

  render() {
    return (
      <Fragment>
        {this.props.fetching ? <div> <div style={{ height: "25vh" }}> </div><Loading /></div> :
          <div>{
            this.props.data.length === 0 ? <Typography variant="h6">Brak wpisów w historii</Typography> :
            this.props.data.map(el => 
            <Grid item xs={12}>
                <HistoryEntry />
            </Grid>)
            }
          </div>
        }
      </Fragment>
    );
  }
}

export default HistoryPageView;
