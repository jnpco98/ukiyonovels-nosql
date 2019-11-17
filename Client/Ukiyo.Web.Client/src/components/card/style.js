import styled from 'styled-components';

export const Container = styled.div`
  width: 70%;
  height: 250px;
  background: aqua;
  padding: 1.1rem;
  display: flex;
  flex-direction: ${props => props.row ? 'row' : 'column'};
  border-radius: 1rem;
  border: 1px solid green;
`;

export const Heading = styled.div`
  text-align: center;
  margin: 0.5rem 0 1.5rem;
`;

export const Content = styled.div`
  text-align: left;
`;

export const LeftContainer = styled.div`
  flex: 1;
  padding: 0.5rem;
`;

export const RightContainer = styled.div`
  flex: 3;
  padding: 1rem;
`;

export const Image = styled.img`
  max-width:100%;
  max-height:100%;
  object-fit: contain;
`;