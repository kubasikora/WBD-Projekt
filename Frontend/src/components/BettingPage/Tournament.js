import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Match from './Match';
import NoMatchesAvailableInfo from './NoMatchesAvailableInfo';

const Tournament = (props) => {
    return (
        <ExpansionPanel style={{backgroundColor: "rgb(6,17,90)", margin: "1px"}}>
            <ExpansionPanelSummary>
                <Typography variant="h5" style={{color: "white"}}>{props.tournamentInfo[0].tournament}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    {props.tournamentInfo.map(el => 
                    <Grid item xs={12}>
                        <Match 
                            postBet={props.postBet}
                            matchId={el.matchId}
                            betId={el.bet ? el.bet[0]: null}
                            home={el.bet ? el.bet[1] : 0} 
                            away={el.bet ? el.bet[2] : 0} 
                            fixture={{"home": el.home, "away": el.away}}
                            deleteBet={props.deleteBet}
                            fetchDetails={props.fetchDetails}
                            />
                    </Grid>)}
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Tournament;