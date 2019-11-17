import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background: #323633;

  ul {
    display: flex;
    max-width: 80%;
  }
`;

export const MenuItem = styled.li`
  display: flex;
  color: whitesmoke;
  background: ${props => props.active ? '#ed5353' : ''};
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  transition: background 0.09s ease-in;
  text-align: center;
  align-items: center;

  &:hover {
    background: #ed5353;
  }

  a {
    display: block;
    padding: 1.1rem;
  }
`;

export const Drawer = styled.div`
  position: fixed;
  width: 100%;
  top: ${props => props.topOffset};
  left: 0;
  background: #111;
  overflow: hidden;
  height: ${props => props.height};
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 150;

  li {
    white-space: nowrap;
  }
  
  ${props => 
    props.sidenavActive ?
      css`
        padding: 2rem 0;
        opacity: 1;
      ` :
      css`
        padding: 0;
        opacity: 0;
      `}
`;