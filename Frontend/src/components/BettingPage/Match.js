import React from "react";
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import { Grid, TextField, Button } from "@material-ui/core";

class Match extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixture: props.fixture,
            homeGoals: !!props.home ? props.home : 0,
            awayGoals: !!props.away ? props.away : 0
        }
    }

    handleChange = name => event => {
        if (event.target.value < 0) return;
        this.setState({
            [name]: event.target.value,
        });
    };

    deleteBet = event => {
        this.props.deleteBet(this.props.betId);
    }

    putBet = event => {
        this.props.postBet(this.state.homeGoals, this.state.awayGoals, this.props.matchId);
    }

    getMoreInfo = event => {
        alert("Informacja aktualnie niedostępna");
    }

    render() {
        return (
            <ExpansionPanel style={{ width: "100%", backgroundColor: this.props.betId ? "rgb(100,100,100)" : "#285239", margin: "1px" }}>
                <ExpansionPanelSummary>
                    <Typography style={{color: "white"}}>{`${this.state.fixture.home} - ${this.state.fixture.away}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{ backgroundColor: "rgb(230,230,230)" }}>
                    <Grid container>
                    <Grid item xs={12}>
                    <div style={{height: "20px"}}/></Grid>
                        <Grid item xs={4}>
                            <Typography>
                                Gospodarze
                            </Typography>
                            <TextField
                                id="number"
                                value={this.state.homeGoals}
                                onChange={this.handleChange('homeGoals')}
                                type="number"
                                style={{ width: "15%" }}
                            />
                        </Grid>
                        <Grid item xs={4} />
                        <Grid item xs={4}>
                            <Typography>
                                Goście
                            </Typography>
                            <TextField
                                id="number"
                                value={this.state.awayGoals}
                                onChange={this.handleChange('awayGoals')}
                                type="number"
                                style={{ width: "15%" }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button 
                            variant="contained" 
                            color="primary" 
                            style={{ 
                                width: "200px", 
                                height: "40px", 
                                backgroundColor: "rgb(6,17,90)",
                                margin: "5px"  
                            }} 
                            onClick={this.putBet}>
                                Postaw
                            </Button>
                            <Button 
                            variant="contained" 
                            color="primary" 
                            style={{ 
                                width: "200px", 
                                height: "40px", 
                                color: "rgb(6,17,90)",
                                backgroundColor: "white",
                                margin: "5px"     
                            }} 
                            onClick={this.getMoreInfo}>
                                Szczegóły spotkania
                            </Button>
                            {this.props.betId === null ? 
                                <Button 
                                variant="contained" 
                                color="secondary" 
                                disabled
                                style={{ 
                                    width: "200px", 
                                    height: "40px", 
                                    margin: "5px"     
                                }} 
                                onClick={this.getMoreInfo}>
                                    Usuń zakład
                                </Button>
                                 : 
                                <Button 
                                variant="contained" 
                                color="secondary" 
                                style={{ 
                                    width: "200px", 
                                    height: "40px", 
                                    margin: "5px"     
                                }} 
                                onClick={this.deleteBet}>
                                    Usuń zakład
                                </Button>
                            }
                        </Grid>
                    </Grid>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

export default Match;