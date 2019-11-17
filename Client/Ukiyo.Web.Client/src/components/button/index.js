import React from 'react';
import { Container } from './style';

export const Button = ({ children, className, onClick, ...modifiers }) => {
  // width, height, color, background, small, large, twitter, google, treehouse
  return (
    <Container className={className} ref={innerRef} onClick={onClick} {...modifiers}>
      {children}
    </Container>
  );
};