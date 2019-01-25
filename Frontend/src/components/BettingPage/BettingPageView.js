import React, {Fragment} from "react";
import { Grid, Tooltip, Typography } from "@material-ui/core";
import Tournament from "./Tournament";
import NoTournamentsAvailableInfo from "./NoTournamentsAvailableInfo";
import Loading from "../Loading";
import Cookies from "js-cookie";

class BettingPageView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBettableMatches(Cookies.get("loggedIn"));
  }

  render() {  
    return (
      <div>
        {this.props.fetching ?
                <div>
                  <div style={{ height: "17vh" }} />
                  <Loading />
                </div> :
                <Fragment>
                  {this.props.data.length == 0 ?
                      <NoTournamentsAvailableInfo />
                    : <Grid container style={{overflow : "scroll"}}>
                      {this.props.data.map(el => 
                      <Grid item xs={12}>
                        <Tournament 
                          tournamentInfo={el}   
                          postBet={this.props.postBet}
                          deleteBet={this.props.deleteBet}
                        />
                      </Grid>)}
                    </Grid>}
                </Fragment>}
      </div>
          
    );
  }
}

export default BettingPageView;
