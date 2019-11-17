import React from 'react';
import { Container } from './style';

// Modifiers (color || transparent || centerContent)
export const Backdrop = ({ children, show, onClick, className, ...modifiers }) => {
  return (
    <Container className={className} show={show} onClick={onClick} {...modifiers}>
      {children}
    </Container>
  );
};