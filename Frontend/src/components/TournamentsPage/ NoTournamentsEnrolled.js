import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const NoTournamentsEnrolled = (props) => {
    return (
        <Grid item xs={12}>
            <Typography variant="h6">
                Nie dokonano zapisu na żaden turniej
            </Typography>
        </Grid>


    )
}

export default NoTournamentsEnrolled;