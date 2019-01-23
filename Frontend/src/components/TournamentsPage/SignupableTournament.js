import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Card, CardContent } from "@material-ui/core";

const SignupableTournament = (props) => {
    return (
        <Grid container spacing={16}>
            <Grid item xs={12} style={{margin: "5px 30px"}} >
                <ExpansionPanel style={{backgroundColor: "rgb(230,230,230)"}}>
                    <ExpansionPanelSummary>
                        <Typography>Nazwa turnieju</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <Grid container>
                            <Grid item xs={12}>
                                
                            </Grid>
                        </Grid>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Grid>
        </Grid>
    )
}

export default SignupableTournament;