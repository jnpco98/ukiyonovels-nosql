import styled from 'styled-components';
import { center } from '../../mixins'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color || 'rgba(0, 0, 0, 0.7);'};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  ${props =>
    props.centerContent &&
      center };
  
  ${props =>
    props.show ?
      `display: flex` :
      `display: none;`};

  ${props =>
    props.transparent &&
      `background-color: rgba(0, 0, 0, 0);`}
`;