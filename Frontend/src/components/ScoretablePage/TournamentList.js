import React, { Fragment } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Loading from "../Loading";

const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
}

const handler = name => event => {
    alert(name);
}

const TournamentList = props => {
    return (
        <Fragment>
            {props.fetching ? <div> <div style={{height: "25vh"}}> </div><Loading/></div> : 
            <div style={{ overflow: "scroll", maxHeight: "100%" }}>
                <List component="nav">
                    <ListItemLink onClick={handler("Tournament name 1")}>
                        <ListItemText primary="Tournament name 1" />
                    </ListItemLink>
                    <ListItemLink onClick={handler("Tournament name 2")}>
                        <ListItemText primary="Tournament name 2" />
                    </ListItemLink >
                    <ListItemLink onClick={handler("Tournament name 3")}>
                        <ListItemText primary="Tournament name 3" />
                    </ListItemLink>
                    <ListItemLink onClick={handler("Tournament name 4")}>
                        <ListItemText primary="Tournament name 4" />
                    </ListItemLink>
                </List>
            </div>}
        </Fragment>
    )
}

export default TournamentList;