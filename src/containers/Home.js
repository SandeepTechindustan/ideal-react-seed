import React from 'react';
import { home } from '../constants';
import { Container, Item } from '../components/common';

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
          {home.bio.map((i, n) => <p key={n}>{i}</p>)}
        </Item>
      </Container>
    )
  }
}