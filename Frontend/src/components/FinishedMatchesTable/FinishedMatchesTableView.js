import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Loading from "../Loading";

const FinishedMatchesTableView = props => {
    return (
        <Paper style={{ height: "65vh", width: "95%" }}>
            <div style={{height: "10px"}}/>
            <Typography variant="h4" gutterBottom style={{ marginTop: "10px" }}>
                Zakończone spotkania
                            </Typography>
            {props.fetching?
                <div>
                    <div style={{ height: "17vh" }} />
                    <Loading />
                </div> :
                <div> 
                        

                </div>}
        </Paper>
    )
}

export default FinishedMatchesTableView;