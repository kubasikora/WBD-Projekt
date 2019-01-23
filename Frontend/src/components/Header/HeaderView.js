import React from "react";
import "./Header.css";
import logo from './logo.png'; // with import
import Grid from "@material-ui/core/Grid";

class HeaderView extends React.Component {
  render() {
    return (
      <header>
        <Grid container spacing={0} className="header">
          <Grid item sm={12} />
          <Grid item xs={12}>
            <img src={logo} className="header-logo" alt="logo" />
          </Grid>
        </Grid>
      </header>
    );
  }
}

export default HeaderView;
