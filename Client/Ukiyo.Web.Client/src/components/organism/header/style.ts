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

export const HeaderLeftMenu = styled.ul`
  ${M.MEDIA_XXSMALL} {
    margin-left: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    margin-left: 2rem;
  }
`;

export const HeaderRightMenu = styled.ul`
  margin-right: 1rem;
  
  ${M.MEDIA_XSMALL} {
    margin-right: 2rem;
  }
`;

export const HeaderSideDrawerMenu = styled.ul`
`;

export const HeaderMenuItem = styled.li<HeaderMenuItemStyleProps>`
  ${center(FLEX_ALIGN_MAIN)};

  text-transform: uppercase;
  margin: 0 0.9rem;
  padding-top: 0.5rem;

  &.is-icon {
    width: 0.8rem;
    height: 0.8rem;
    padding-top: 0;
    margin-right: 0;
  }

  ${M.MEDIA_XXSMALL} {
    margin: 0 2rem;
  }

  ${M.MEDIA_XSMALL} {
    margin: 0 3rem;

    &.is-icon {
      width: 1rem;
      height: 1rem;
    }
  }
`;

export const HeaderHamburger = styled.li`
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

export const HeaderContainer = styled.header<ContainerStyleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  position: fixed;
  transition: all 0.2s ease;
  z-index: 50;
  background: transparent;

  ${HeaderLeftMenu}, ${HeaderRightMenu} {
    display: flex;
  }

  ${props =>
    props.floating &&
      css`
        font-size: 0.9rem;
        position: fixed;
        background: ${({ theme, ...props }) => theme.colors.background};
        box-shadow: 0px 10px 13px -9px rgba(0,0,0,0.75);
      `
    }
    
  ${M.MEDIA_XSMALL} {
    height: 6rem;
  }

  ${M.MEDIA_XXLARGE} {
    height: 8rem;
  }
`;

export const HeaderSideDrawer = styled(SideDrawer)`
  ${HeaderMenuItem}:first-child {
    margin-top: 4rem;
  }

  ${M.MEDIA_XXSMALL} {
    width: 23rem;

    ${HeaderMenuItem}:first-child {
      margin-top: 4.5rem;
    }
  }
  
  ${M.MEDIA_XSMALL} {
    width: 28rem;

    ${HeaderMenuItem}:first-child {
      margin-top: 7.5rem;
    }
  }

  ${M.MEDIA_LARGE} {
    width: 50%;
    ${HeaderMenuItem}:first-child {
      margin-top: 10rem;
    }
  }
`;