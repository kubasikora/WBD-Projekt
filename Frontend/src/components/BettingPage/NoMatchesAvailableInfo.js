import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const NoMatchesAvailableInfo = (props) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4">
                Brak dostępnych spotkań
            </Typography>
        </Grid>


    )
}

export default NoMatchesAvailableInfo;