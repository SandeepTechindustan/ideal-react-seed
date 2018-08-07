import React from 'react';
import { Grid } from '@material-ui/core';

export const Container = props => {
  return (
    <Grid container className={props.className}>
      {props.children}
    </Grid>
  )
}

export const Item = props => {
  return (
    <Grid
      item
      xs={props.xs}
      sm={props.sm || props.xs}
      md={props.md || props.sm || props.xs}
      lg={props.lg || props.md || props.sm || props.xs}
      className={props.className}
    >
      {props.children}
    </Grid>
  )
}