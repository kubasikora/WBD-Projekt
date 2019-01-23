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
        <ExpansionPanel>
            <ExpansionPanelSummary>
                <Typography>Ekstraklasa</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Grid container>
                <Match home={1} away={3} fixture={{"home": "Arka Gdynia", "away": "Legia Warszawa"}}/>
                </Grid>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    )
}

export default Tournament;