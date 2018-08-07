import React from 'react';
import { Grid } from '@material-ui/core';
import { home } from '../constants';
import { Container, Item } from '../components/common';

export default class Home extends React.Component {

  render() {
    console.log(home, 'home');
    
    return(
      <Container className="container">
        <Item xs={12} sm={6}>
        </Item>
        <Item xs={12} sm={6} className="name-container">
          <Container>
            <Item xs={12}>
              <p>{home.name}</p>
            </Item>
          </Container>
        </Item>
        <Item xs={12} sm={6} className="bio-container">
          { home && home.bio && home.bio.map((item, i) => <p key={i}>{item}</p>)}
        </Item>
      </Container>
    )
  }
}