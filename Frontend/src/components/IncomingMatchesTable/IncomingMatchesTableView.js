import React from "react";
import { Paper, Typography } from "@material-ui/core";
import Loading from "../Loading";
import IncomingMatchEntry from "./IncomingMatchEntry";

class IncomingMatchesTableView extends React.Component {
    componentDidMount(){
        this.props.fetchIncomingMatches();
    }

    render() {
        return (
            <Paper style={{ height: "65vh", width: "95%" }}>
                <div style={{ height: "10px" }} />
                <Typography variant="h4" gutterBottom style={{ marginTop: "10px" }}>
                    Nadchodzące spotkania
                            </Typography>
                {this.props.fetching ?
                    <div>
                        <div style={{ height: "17vh" }} />
                        <Loading />
                    </div> :
                     <div style={{ margin: "10px" }}>
                     {this.props.data.length == 0 ?
                         <Typography variant="h6" gutterBottom style={{ marginTop: "10px" }}>
                             Brak spotkań
                         </Typography>
                         : this.props.data.map(el => <IncomingMatchEntry matchInfo={el} />)}
                 </div>}
            </Paper>
        )
    }
}

export default IncomingMatchesTableView;