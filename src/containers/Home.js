import React from 'react';
import { Container, Item } from '../components/common';
import { home } from '../constants';

export default class Home extends React.Component {

  render() {
    console.log(home, 'home');
    
    return(
      <Container className="container">
        <Item xs={12}>
         Home 
        </Item>
      </Container>
    )
  }
}