import React from 'react';
import { Container, Item } from './style';

export const EqualColumnLayout = ({ children }) => {
  return (
    <Container>
      {children.map(el => <Item spacerHorizontal flex={1}>{el}</Item>)}
    </Container>
  );
};

export const StretchedMiddleLayout = ({ children }) => {
  return (
    <Container>
      <Item spacerHorizontal width='20rem'>{children[0]}</Item>
      <Item spacerHorizontal flex={2}>{children[1]}</Item>
      <Item spacerHorizontal width='20rem'>{children[2]}</Item>
    </Container>
  );
}

export const TriGridLayout = ({ children }) => {
  return (
    <Container grid>
      {children.map(child => <Item triGrid>{child}</Item>)}
    </Container>
  );
};

export const VerticalStackLayout = ({ children }) => {
  return(
    <Container vertical>
      {children.map(child => <Item spacerVertical>{child}</Item>)}
    </Container>
  );
}

export const EqualGrid = ({ children }) => {
  return (
    <Container grid>
      {children.map(child => <Item equalGrid childCount={Math.sqrt(children.length)}>{child}</Item>)}
    </Container>
  );
}