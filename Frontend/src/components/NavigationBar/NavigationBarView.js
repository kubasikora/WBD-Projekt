import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./TabContainer";
import LoginPage from "../LoginPage";
import ResultsPage from "../ResultsPage";
import HistoryPage from "../HistoryPage";
import ScoretablePage from "../ScoretablePage";
import BettingPage from "../BettingPage";
import TournamentsPage from "../TournamentsPage";

export default class NavigationBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({value});
  };

  componentWillReceiveProps(){
    this.setState({value: 0});
  }

  render() {
    const {value} = this.state;
    return (
      <div>
        {this.props.loggedIn ? <div>
          <AppBar position="sticky" style={{backgroundColor: "rgb(6,17,90)"}}>
       
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab label="Zakłady" />
            <Tab label="Turnieje" />
            <Tab label="Wyniki" />
            <Tab label="Historia" />
          </Tabs>
        
        </AppBar>
        {value === 0 && <TabContainer><BettingPage /></TabContainer>}
        {value === 1 && <TabContainer><TournamentsPage /></TabContainer>}
        {value === 2 && <TabContainer><ScoretablePage /></TabContainer>}
        {value === 3 && <TabContainer><HistoryPage /></TabContainer>}
        </div> : 
        <div>
          <AppBar position="sticky" style={{backgroundColor: "rgb(6,17,90)"}}>
       
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab label="Wyniki" />
            <Tab label="Logowanie" />
          </Tabs>
        
        </AppBar>
        {value === 0 && <TabContainer><ResultsPage /></TabContainer>}
        {value === 1 && <TabContainer><LoginPage /></TabContainer>}
        </div>
      }
      </div>
    );
  }
}
