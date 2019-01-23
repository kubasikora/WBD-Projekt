import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import IncomingMatchesTable from "../IncomingMatchesTable";
import FinishedMatchesTable from "../FinishedMatchesTable";
import SeeAlsoTable from "../SeeAlsoTable";


class ResultsPageView extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Grid container>
                    <Grid item xs={4}>
                        <IncomingMatchesTable isFetching={true} />
                    </Grid>
                    <Grid item xs={4}>
                        <FinishedMatchesTable isFetching={true} />
                    </Grid>
                    <Grid item xs={4}>
                        <SeeAlsoTable />    
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default ResultsPageView;