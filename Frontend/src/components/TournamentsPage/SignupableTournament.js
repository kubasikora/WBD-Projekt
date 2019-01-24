import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Card, CardContent, Button } from "@material-ui/core";

const SignupableTournament = (props) => {
    console.log(JSON.stringify(props));
    return (
        <Grid container >
            <Grid item xs={12} style={{margin: "5px 30px"}} >
                <ExpansionPanel style={{backgroundColor: "rgb(230,230,230)"}}>
                    <ExpansionPanelSummary style={{ backgroundColor: "rgb(6,17,90)"}}>
                        <Typography style={{color: "white"}}>{props.tournamentInfo.name}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ backgroundColor: "rgb(64, 74, 135)" }}>
                        <Grid container>
                            <Grid item xs={10}>
                                <div style={{height: "22px"}} />
                                <Typography align="left" style={{color: "white"}}>{`Data rozpoczęcia: ${props.tournamentInfo.startDateDay}.${props.tournamentInfo.startDateMonth}.${props.tournamentInfo.startDateYear}`}</Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <div style={{height: "10px"}} />
                                <Button variant="contained" 
                                        color="primary"
                                        onClick={() => props.signUp(props.tournamentInfo.tournamentId)}
                                >
                                Zapisz 
                                </Button>

                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </Grid>
    )
}

export default SignupableTournament;