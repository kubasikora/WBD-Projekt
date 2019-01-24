import React, {Fragment} from "react";
import "./Header.css";
import logo from './logo.png'; // with import
import { Grid, Tooltip, Typography } from "@material-ui/core";

class HeaderView extends React.Component {
  render() {
    return (
      <header>
        <Grid container spacing={0} className="header">
        {this.props.loggedIn ?
        <Fragment>
        <Grid item sm={10} /> 
          <Grid item xs={2}>
            <Tooltip title="Wyloguj" enterDelay={500} leaveDelay={200}>
              <h4 className="login-info logout-cursor" onClick={() => this.props.logout()}>
                <Typography variant="h6" style={{color: "white"}}>Wyloguj</Typography> 
              </h4>
            </Tooltip>
          </Grid></Fragment> : (
          <Grid item xs={12} style={{height: "45px"}}/>)
        }
          <Grid item xs={12}>
            <img src={logo} className="header-logo" alt="logo" />
          </Grid>
        </Grid>
      </header>
    );
  }
}

export default HeaderView;
