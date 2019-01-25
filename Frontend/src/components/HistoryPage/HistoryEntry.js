import React, { Fragment } from "react";
import { Grid, Tooltip, Typography, Paper, Card, CardContent } from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const HistoryEntry = (props) => {
    return (
        <ExpansionPanel style={{backgroundColor: "rgb(6,17,90)", margin: "2px"}}>
            <ExpansionPanelSummary>
                <Typography variant="h6" style={{color: "white"}}>{`${props.history.matchInfo.home} - ${props.history.matchInfo.away}`}</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    <Grid item xs={6}>
                        <Card style={{ margin: "1%", backgroundColor: "rbg(200,200,200)" }}>
                            <CardContent>
                                {props.history.resultObject ?
                                    (<span><Typography> Wynik spotkania </Typography>
                                        <Typography> {`${props.history.resultObject.homeGoals} : ${props.history.resultObject.awayGoals}`} </Typography></span>) :
                                    (<span><Typography> Brak</Typography>
                                        <Typography> wyniku </Typography></span>)
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{ margin: "1%", backgroundColor: "rbg(200,200,200)" }}>
                            <CardContent>
                                <Typography> Twój zakład </Typography>
                                <Typography> {`${props.history.betObject.homeGoals} : ${props.history.betObject.awayGoals}`} </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default HistoryEntry;