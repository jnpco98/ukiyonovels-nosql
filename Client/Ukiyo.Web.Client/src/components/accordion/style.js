import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  margin: 0 auto;
`;

export const Label = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: none;
  outline: none;
  text-align: left;
  font-size: 1.2rem;
  padding: 1rem 1.2rem;
  background-color: whitesmoke;
  cursor: pointer;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: #ddd;
  }
`;

export const Panel = styled.div`
  padding: 0 1.2rem;
  border: 1px solid whitesmoke;
  overflow: hidden;
  max-height: ${props => props.expanded};
  transition: max-height 0.2s ease-in-out;
`;

