import styled, { css } from 'styled-components';

const menuItemDefaultStyle = css`
  display: flex;
  color: whitesmoke;
  text-transform: uppercase;
  font-weight: bolder;
  cursor: pointer;
  text-align: center;
  align-items: center;
  transition: background 0.09s ease-in;
  
  a {
    display: block;
    padding: 1.1rem;
  }
  
  &:hover {
    background: #ed5353;
  }
`;

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
  ${menuItemDefaultStyle};
  background: ${props => props.active ? '#ed5353' : ''};
`;

export const UserLink = styled.li`
  ${menuItemDefaultStyle};
  transition: background 0.09s ease-in;
`;

export const HamburgerLink = styled.li`
  ${menuItemDefaultStyle};
  transition: background 0.09s ease-in;
  padding: 1rem 0;

  &:hover {
    background: initial;
  }
`;

type DrawerStyleProps = {
  sidenavActive: boolean;
  topOffset?: string;
  height: string;
}

export const Drawer = styled.div<DrawerStyleProps>`
  position: absolute;
  background: #111;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: 5;

  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  max-width: 17rem;

  li {
    white-space: nowrap;
  }
  
  ${props => 
    props.sidenavActive ?
      css`
        opacity: 1;
        transform: translateX(0);
      ` :
      css`
        opacity: 0;
        transform: translateX(-100%);
      `}

  ${MenuItem}:first-child {
    margin-top: 4rem;
  }

  ${MenuItem}:last-child {
    margin-bottom: 0.5rem;
  }
`;