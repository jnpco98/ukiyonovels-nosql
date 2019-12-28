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

type MenuItemStyleProps = {
    active: boolean;
}

export const MenuItem = styled.li<MenuItemStyleProps>`
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

export const UserLink = styled.li`
  display: flex;
  color: whitesmoke;
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

export const HamburgerLink = styled.li`
  display: flex;
  color: whitesmoke;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  transition: background 0.09s ease-in;
  text-align: center;
  align-items: center;
  padding: 1rem 0;
  
  a {
    display: block;
    padding: 1.1rem;
  }
`;

type DrawerStyleProps = {
  sidenavActive: boolean;
  topOffset?: string;
  height: string;
}

export const Drawer = styled.div<DrawerStyleProps>`
  position: absolute;
  width: 100%;
  top: ${props => props.topOffset || 0};
  left: 0;
  background: #111;
  overflow: hidden;
  height: ${props => props.height};
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 5;

  li {
    white-space: nowrap;
  }
  
  ${props => 
    props.sidenavActive ?
      css`
        opacity: 1;
      ` :
      css`
        padding: 0;
        opacity: 0;
      `}

  ${MenuItem}:first-child {
    margin-top: 0.5rem;
  }

  ${MenuItem}:last-child {
    margin-bottom: 0.5rem;
  }
`;