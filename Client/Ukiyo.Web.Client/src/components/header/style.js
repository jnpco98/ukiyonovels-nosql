import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '8rem'};
  background: ${props => props.bgColor} url(${props => props.background}) no-repeat top;
  background-size: cover;
`;