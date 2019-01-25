import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Card, CardContent, Button } from "@material-ui/core";

const SignupableTournament = (props) => {
    const pad = d => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    return (
        <Grid container >
            <Grid item xs={12} style={{margin: "1px 20px"}} >
                <ExpansionPanel style={{backgroundColor: "rgb(230,230,230)"}}>
                    <ExpansionPanelSummary style={{ backgroundColor: "rgb(6,17,90)"}}>
                        <Typography variant="h6" style={{color: "white"}}>{props.tournamentInfo.tournamentName}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails style={{ backgroundColor: "rgb(64, 74, 135)" }}>
                        <Grid container>
                            <Grid item xs={10}>
                                <div style={{height: "22px"}} />
                                <Typography align="left" style={{color: "white"}}>{`Data rozpoczęcia: ${pad(props.tournamentInfo.day)}.${pad(props.tournamentInfo.month)}.${props.tournamentInfo.year}`}</Typography>
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