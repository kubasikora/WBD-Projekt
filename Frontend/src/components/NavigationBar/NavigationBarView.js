import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./TabContainer";
import LoginPage from "../LoginPage";
import ResultsPage from "../ResultsPage";

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

  render() {
    const {value} = this.state;

    return (
      <div>
        {this.state.loggedIn ? <div> </div> : 
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
