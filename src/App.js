import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import './styles/main.scss';

class App extends Component {
  render() {
    return (
      <Grid container style={{ textAlign: 'center', color: '#114b59'}}>
        <Grid item xs={12} sm={12} md={12}>
          <h1>This is a test</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <img src="./images/sample1.jpg" width="50%" />
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{position: 'fixed', bottom: 0, textAlign: 'center'}}>
          <h6>By: Sandeep</h6>
        </Grid>
      </Grid>
    );
  }
}

export default App;
