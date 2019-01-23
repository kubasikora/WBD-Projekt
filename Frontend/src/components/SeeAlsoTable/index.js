import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, Divider } from "@material-ui/core";

const ListItemLink = props => {
    return <ListItem button component="a" {...props} />;
}

const SeeAlsoTable = () => {
    return (
        <Paper style={{ height: "65vh", width: "95%"}}>
            <div style={{ height: "10px" }} />
            <Typography variant="h4" gutterBottom style={{ marginTop: "10px"}}>
                Zobacz również
            </Typography>
            <div style={{overflow : "scroll", maxHeight: "88%"}}>
            <List component="nav">
                <ListItemLink href="https://www.bbc.co.uk/sport">
                    <ListItemText primary="BBC Sport" />
                </ListItemLink>
                <ListItemLink href="https://www.przegladsportowy.pl/">
                    <ListItemText primary="Przegląd Sportowy" />
                </ListItemLink>
                <ListItemLink href="http://www.sport.pl/sport-hp/0,0.html">
                    <ListItemText primary="Sport.pl" />
                </ListItemLink>
                <ListItemLink href="https://www.flashscore.pl/">
                    <ListItemText primary="Flashscore" />
                </ListItemLink>
                <ListItemLink href="https://www.marca.com/">
                    <ListItemText primary="Marca" />
                </ListItemLink>
                <ListItemLink href="https://www.gazzetta.it/">
                    <ListItemText primary="La Gazzetta dello Sport" />
                </ListItemLink>
                <ListItemLink href="https://www.thesun.co.uk/">
                    <ListItemText primary="The Sun" />
                </ListItemLink>
                <ListItemLink href="https://sportowefakty.wp.pl/">
                    <ListItemText primary="Sportowe Fakty" />
                </ListItemLink>
                <ListItemLink href="https://sport.onet.pl/">
                    <ListItemText primary="Sport Onet" />
                </ListItemLink>
                <ListItemLink href="https://sport.tvp.pl/">
                    <ListItemText primary="Sport TVP.pl" />
                </ListItemLink>
                <ListItemLink href="https://www.transfermarkt.pl/">
                    <ListItemText primary="Transfermarkt" />
                </ListItemLink>
                <ListItemLink href="https://www.abendzeitung-muenchen.de/sport">
                    <ListItemText primary="Abendzeitung Sport" />
                </ListItemLink> 
            </List>
            </div>
        </Paper>
    )
}

export default SeeAlsoTable;