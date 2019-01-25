import React from "react";
import { Grid, Typography, Divider } from "@material-ui/core";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

const FinishedMatchEntry = props => {
    const pad = d => {
        return (d < 10) ? '0' + d.toString() : d.toString();
    }

    return (
        <ExpansionPanel style={{ backgroundColor: "rgb(6,17,90)", margin: "1px"}}>
            <ExpansionPanelSummary style={{ backgroundColor: "rgb(6,17,90)"}}>
                <Grid container>
                    <Grid item xs={6}>
                        <Typography style={{ color: "white" }}>
                            {props.matchInfo.home} - {props.matchInfo.away}
                        </Typography>
                    </Grid>
                    <Grid item xs={5} />
                    <Grid item xs={1}>
                    <Typography style={{ color: "white"}} align="left" >
                            {`${pad(props.matchInfo.day)}.${pad(props.matchInfo.month)}.${props.matchInfo.year}`}
                        </Typography>
                    </Grid>
                </Grid>

            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ backgroundColor: "rgb(64, 74, 135)" }}>
                <Grid container>
                <Grid item xs={12}><div style={{height: "17px"}} /></Grid>
                    <Grid item xs={12}>
                        <Typography style={{ color: "white"}} align="left" >
                            {`Sędzia główny: ${props.matchInfo.ref}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{ color: "white"}} align="left" >
                            {`Stadion: ${props.matchInfo.stadium}`}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography style={{ color: "white"}} align="left" >
                            {`Rozgrywki: ${props.matchInfo.tournament}`}
                        </Typography>
                    </Grid>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default FinishedMatchEntry;