import React from 'react';
import { Container } from './style';

export const CircularAvatar = ({ radius, imgUrl }) => {
  return (
    <Container circular width={radius} height={radius} src={imgUrl}/>
  );
};

export const Avatar = ({ width, height, imgUrl }) => {
  return(
    <Container width={width} height={height} src={imgUrl}/>
  );
}