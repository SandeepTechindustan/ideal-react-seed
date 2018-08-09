import React from 'react';
import { home } from '../constants';
import { Container, Item } from '../components/common';
import { Icon } from '@material-ui/core';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {

  render() {
    
    return(
      <Container className="home-container">
        <Item xs={12} sm={6} className="left-side">
          <Container>
            <Item xs={12} className="fixed-panel">
              {home.name}
            </Item>
          </Container>
        </Item>
        <Item xs={12} sm={6} className="right-side">
          <Container>
            <Item xs={12}>
              {home.bio.map((i, n) => <p key={n}>{i}</p>)}
            </Item>
            <Item xs={12}>
              
            </Item>
          </Container>
        </Item>
      </Container>
    )
  }
}