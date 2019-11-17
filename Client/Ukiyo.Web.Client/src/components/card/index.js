import React from 'react';
import { Container, Heading, Content, LeftContainer, RightContainer, Image } from './style';

export const Card = ({ title, children, className }) => {
  return (
    <Container className={className}>
      <Heading><h2>{title}</h2></Heading>
      <Content><p>{children}</p></Content>
    </Container>
  );
};

export const ArticleCard = ({ title, children, className }) => {
  return(
    <Container className={className} row>
      <LeftContainer><Image src=''/></LeftContainer>
      <RightContainer>
        <Heading><h2>{title}</h2></Heading>
        <Content><p>{children}</p></Content>
      </RightContainer>
    </Container>
  );
};