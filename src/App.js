import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Grid container style={{fontFamily: 'ubuntu', textAlign: 'center'}}>
        <Grid item xs={12} sm={12} md={12}>
          <h1>This is a test</h1>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{position: 'fixed', bottom: 0, textAlign: 'center'}}>
          <h2>By: Sandeep</h2>
        </Grid>
      </Grid>
    );
  }
}

export default App;
