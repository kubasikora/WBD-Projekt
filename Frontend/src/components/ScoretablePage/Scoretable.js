import React, { Fragment } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import Loading from "../Loading";

const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
}

const Scoretable = props => {
    return (
        <Fragment>
            {props.fetching ? <div> <div style={{height: "25vh"}}> </div><Loading/></div> : 
            <div style={{ overflow: "scroll", maxHeight: "100%" }}>
                <List component="nav">
                    <ListItemLink>
                        <ListItemText primary="Gracz 1" />
                    </ListItemLink>
                    <ListItemLink>
                        <ListItemText primary="Gracz 2" />
                    </ListItemLink>
                    <ListItemLink>
                        <ListItemText primary="Gracz 3" />
                    </ListItemLink>
                </List>
            </div>}
        </Fragment>
    )
}

export default Scoretable;