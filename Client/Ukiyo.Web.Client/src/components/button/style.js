import styled, { css } from 'styled-components';

const Small = css``;

const Large = css``;

const Twitter = css`
  color: white;
  border: none;
  border-radius: 0.3rem;
  font-weight: bold;
  background-color: #D4312D;

  &:hover {
    opacity: 1;
    background-color: red;
  }
`;

const Google = css`
  color: white;
  border: none;
  border-radius: 0.1rem;
  font-weight: normal;
  background-color: #4abaed;

  &:hover {
    opacity: 1;
    background-color: #00afff;
  }
`;

const Treehouse = css`
  color: #1cbd6a;
  border-radius: 0.3rem;
  border: 2px solid #1cbd6a;
  font-weight: bold;
  background-color: white;
`;

export const Container = styled.a`
  opacity: 1;
  color: #808080;
  padding: 0.8rem 1rem;
  border: 1px solid #808080;
  font-weight: lighter;
  font-size: 0.8rem;
  text-transform: uppercase;
  border-radius: 1.2rem;
  cursor: pointer;
  transition: opacity, color 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  &:hover {
    opacity: 0.7;
  }

  ${props => props.twitter && Twitter};
  ${props => props.google && Google};
  ${props => props.treehouse && Treehouse};
  
  ${props => props.small && Small};
  ${props => props.large && Large};

  ${props => 
    props.flat &&
      `border: none;`}
`;
