import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const NoTournamentsAvailableToEnrollInfo = (props) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h6">
                Aktualnie nie ma żadnych turniejów dostępnych na które możesz się zapisać
            </Typography>
        </Grid>


    )
}

export default NoTournamentsAvailableToEnrollInfo;