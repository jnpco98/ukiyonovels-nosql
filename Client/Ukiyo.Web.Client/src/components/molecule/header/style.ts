import styled, { css } from 'styled-components/macro';
import * as M from '../../../settings/media';
import { Anchor } from '../../atom/text/style';
import { math } from 'polished';
import Hamburger from '../../atom/hamburger';
import { center, FLEX_ALIGN_MAIN } from '../../../utilities/mixins';
import SideDrawer from '../../atom/drawer';

type HeaderMenuItemStyleProps = {
  active?: boolean;
}

const menuItemDefaultStyle = css<HeaderMenuItemStyleProps>`
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

export const HeaderLeftMenu = styled.ul`
  ${M.MEDIA_XXSMALL} {
    padding-left: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    padding-left: 2rem;
  }
`;

export const HeaderRightMenu = styled.ul`
  ${M.MEDIA_XXSMALL} {
    padding-right: 1rem;
  }
  
  ${M.MEDIA_XSMALL} {
    padding-right: 2rem;
  }
`;

export const HeaderSideDrawerMenu = styled.ul`
`;

export const HeaderMenuItemLink = styled(Anchor)`  
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

export const HeaderMenuItem = styled.li<HeaderMenuItemStyleProps>`
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

export const HeaderUserLink = styled.li`
  ${menuItemDefaultStyle};
  transition: background 0.09s ease-in;

  &:hover {
    background: none;
  }

  a {
    padding: 1.1rem 0.7rem;
  }

  
  ${M.MEDIA_MEDIUM} {
    a {
      padding: 1.1rem 1.2rem;
    }
  }

  ${M.MEDIA_XLARGE} {
    a {
      padding: 1.1rem 1.2rem;
    }
  }
`;

export const HeaderHamburger = styled.li`
  ${menuItemDefaultStyle};
  transition: background 0.09s ease-in;
  padding: 1rem 0;

  &:hover {
    background: initial;
  }
`;

type HamburgerIconStyleProps = {
  active: boolean;
}

export const HeaderHamburgerIcon = styled(Hamburger)<HamburgerIconStyleProps>`
  transition: transform 0.3s ease;
`;

type ContainerStyleProps = {
  floating?: boolean;
}

export const HeaderContainer = styled.div<ContainerStyleProps>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  transition: all 0.2s ease;
  z-index: 50;
  background: transparent;
  max-width: ${({ theme, ...props }) => theme.maxScreenSize};

  ${HeaderLeftMenu}, ${HeaderRightMenu} {
    display: flex;
    max-width: 80%;
  }

  ${props =>
    props.floating &&
      css`
        font-size: 0.9rem;
        position: fixed;
        background: ${({ theme, ...props }) => theme.colors.background};
        box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.75);
      `
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

export const HeaderSideDrawer = styled(SideDrawer)`
  ${HeaderMenuItem}:first-child {
    margin-top: 4rem;
  }

  ${HeaderMenuItem}:last-child {
    margin-bottom: 0.5rem;
  }

  ${M.MEDIA_XXSMALL} {
    max-width: 23rem;

    ${HeaderMenuItem}:first-child {
      margin-top: 4.5rem;
    }
  }
  
  ${M.MEDIA_XSMALL} {
    max-width: 28rem;

    ${HeaderMenuItem}:first-child {
      margin-top: 5.5rem;
    }
  }
`;