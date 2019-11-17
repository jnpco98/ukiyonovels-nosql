import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background: #534540;
  padding: 0.6rem;
`;

export const Item = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;

  ${props =>
    props.active ? 
      `color: #756a66;
       background: white` :

      `color: white;
       background: #756a66;`}

  h2 {
    text-transform: uppercase;
    font-weight: bolder;
    padding: 0.2rem;
  }

  &:first-child {
    border-top-left-radius: 1rem;
  }

  &:last-child {
    border-top-right-radius: 1rem;
  }
`;