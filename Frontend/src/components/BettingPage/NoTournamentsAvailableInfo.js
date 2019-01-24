import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const NoTournamentsAvailableInfo = (props) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h4">
                Brak dostępnych turniejów
            </Typography>
        </Grid>


    )
}

export default NoTournamentsAvailableInfo;