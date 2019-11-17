import React, { forwardRef } from 'react';
import { Container } from './style';

export const Header = ({ background, width, height }) => {
  return (
    <Container background={background} width={width} height={height}/>
  );
};