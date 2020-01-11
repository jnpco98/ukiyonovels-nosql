import styled, { css } from 'styled-components/macro';
import * as M from '../../../settings/media';
import { Anchor } from '../../atom/text/style';
import { math } from 'polished';
import HamburgerMenu from '../../atom/hamburger';
import { center, FLEX_ALIGN_MAIN } from '../../../utilities/mixins';

type MenuItemStyleProps = {
  active?: boolean;
}

const menuItemDefaultStyle = css<MenuItemStyleProps>`
  ${center(FLEX_ALIGN_MAIN)};
  color: ${({ theme, ...props }) => props.active ? theme.colors.background : theme.colors.accent};
  text-transform: uppercase;
  text-align: center;
  transition: background 0.09s ease-in;
  position: relative;
  cursor: pointer;
  
  a {
    display: block;
    padding: 1.1rem 0.9rem;
  }
  
  &:hover {
    color: ${({ theme, ...props }) => theme.colors.background};
    background: ${({ theme, ...props }) => theme.colors.accent};
  }

  ${M.MEDIA_MEDIUM} {
    a {
      padding: 1.1rem 1.2rem;
    }
  }

  ${M.MEDIA_XLARGE} {
    a {
      padding: 1.1rem 1.5rem;
    }
  }
`;

export const CLASS_FLOATING = 'floating';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  transition: all 0.2s ease;
  z-index: 50;
  background: transparent;
  max-width: ${({ theme, ...props }) => theme.maxScreenSize};

  ul {
    display: flex;
    max-width: 80%;
  }
  
  &.${CLASS_FLOATING} {
    font-size: 0.9rem;
    position: fixed;
    background: ${({ theme, ...props }) => theme.colors.background};
  }

  ${M.MEDIA_XXSMALL} {
    min-height: 4rem;
  }

  ${M.MEDIA_XSMALL} {
    min-height: 5rem;
  }

  ${M.MEDIA_XLARGE} {
    min-height: 6rem;
  }
`;

export const LeftMenu = styled.ul`
  ${M.MEDIA_XXSMALL} {
    padding-left: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    padding-left: 2rem;
  }
`;

export const RightMenu = styled.ul`
  ${M.MEDIA_XXSMALL} {
    padding-right: 1rem;
  }
  
  ${M.MEDIA_XSMALL} {
    padding-right: 2rem;
  }
`;

export const MenuItemLink = styled(Anchor)`  
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.7`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 0.7`)};
      }
      
      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 0.7`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
      }
  `};
`;

export const MenuItem = styled.li<MenuItemStyleProps>`
  ${menuItemDefaultStyle};

  ${M.MEDIA_XXSMALL} {
    padding-left: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    padding-left: 2rem;
  }

  ${M.MEDIA_XXLARGE}{    
    padding-left: 1.1rem;
  }

  background: ${({ theme, ...props }) => props.active ? theme.colors.accent: ''};
`;

export const UserLink = styled.li`
  ${menuItemDefaultStyle};
  transition: background 0.09s ease-in;
`;

export const HamburgerContainer = styled.li`
  ${menuItemDefaultStyle};
  transition: background 0.09s ease-in;
  padding: 1rem 0;

  &:hover {
    background: initial;
  }
`;

type HamburgerIconStyleProps = {
  active: boolean;
  clientRect: ClientRect;
  screenOffset: {
    top: number;
    left: number;
  }
}

export const HamburgerIcon = styled(HamburgerMenu)<HamburgerIconStyleProps>`
  transition: transform 0.3s ease;
`;

type DrawerStyleProps = {
  sidenavActive: boolean;
  topOffset?: string;
  zIndex?: number;
}

export const Drawer = styled.div<DrawerStyleProps>`
  position: fixed;
  background: ${({ theme, ...props }) => theme.colors.background};
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  z-index: ${props => props.zIndex || 5};

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

  ${M.MEDIA_XXSMALL} {
    max-width: 23rem;

    ${MenuItem}:first-child {
      margin-top: 4.5rem;
    }
  }
  
  ${M.MEDIA_XSMALL} {
    max-width: 28rem;

    ${MenuItem}:first-child {
      margin-top: 5.5rem;
    }
  }

  ${M.MEDIA_SMALL} {
    max-width: 28rem;
  }

  ${M.MEDIA_MEDIUM} {
    max-width: 45rem;
  }
`;