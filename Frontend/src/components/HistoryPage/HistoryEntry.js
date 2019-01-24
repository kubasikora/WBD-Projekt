import React, { Fragment } from "react";
import { Grid, Tooltip, Typography, Paper, Card, CardContent } from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const HistoryEntry = props => {
    return (
        <ExpansionPanel style={{backgroundColor: "rgb(230,230,230)"}}>
            <ExpansionPanelSummary>
                <Typography>Gospodarze - Goście</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                    <Grid item xs={6}>
                        <Card style={{ margin: "1%", backgroundColor: "rbg(230,230,230)" }}>
                            <CardContent>
                                {props.homeBet ?
                                    (<span><Typography> Twój zakład </Typography>
                                        <Typography> {`${props.homeBet} : ${props.awayBet}`} </Typography></span>) :
                                    (<span><Typography> Brak</Typography>
                                        <Typography> zakładu </Typography></span>)
                                }
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Card style={{ margin: "1%", backgroundColor: "rbg(230,230,230)" }}>
                            <CardContent>
                                <Typography> Wynik spotkania </Typography>
                                <Typography> {`${props.homeResult} : ${props.awayResult}`} </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default HistoryEntry;