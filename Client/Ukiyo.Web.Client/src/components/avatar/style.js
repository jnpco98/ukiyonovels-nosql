import styled from 'styled-components';

export const Container = styled.img`
  ${props => 
    props.circular &&
      `border-radius: 50%;`};
      
  width: ${props => props.width || '5rem'};
  height: ${props => props.height || '5rem'};
`;