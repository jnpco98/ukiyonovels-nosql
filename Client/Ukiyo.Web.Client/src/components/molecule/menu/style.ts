import styled, { css } from 'styled-components';
import * as M from '../../../settings/media';
import Text, { TextType } from '../../atom/text';

const underLineMenuLink = css`
  content: '';
  position: absolute;
  bottom: 0.5rem;
  height: 3px;
  width: 80%;
  left: 50%;
  background: ${({ theme, ...props }) => theme.colors.accent};
  transform: translateX(-50%);
`;

const menuItemDefaultStyle = css`
  display: flex;
  color: whitesmoke;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  transition: background 0.09s ease-in;
  position: relative;
  
  a {
    display: block;
    padding: 1.1rem 0.9rem;
  }
  
  &:hover {
    background: ${({ theme, ...props }) => theme.colors.accent};
  }

  ${M.MEDIA_SMALL} {
    &:hover {
      background: none;

      a:after {
        ${underLineMenuLink};
      }
    }

    a {
      padding: 1.1rem 0.7rem;
    }
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
  transition: all 0.12s ease-in;
  z-index: 50;
  background: transparent;

  ul {
    display: flex;
    max-width: 80%;
  }
  
  &.${CLASS_FLOATING} {
    border-radius: 3rem;
    width: 95%;
    font-size: 0.9rem;
    margin-top: 0.5rem;
    overflow: hidden;
    position: fixed;
    background: ${({ theme, ...props }) => theme.colors.primary};
  }
`;

type MenuItemStyleProps = {
    active: boolean;
}

export const MenuItemLink = styled(Text).attrs({
  textType: TextType.Anchor
})`
  font-size: 0.7rem;

  ${M.MEDIA_LARGE} {
    font-size: 0.8rem;
  }
`;

export const MenuItem = styled.li<MenuItemStyleProps>`
  ${menuItemDefaultStyle};
  
  background: ${({ theme, ...props }) => props.active ? theme.colors.accent: ''};

  ${M.MEDIA_SMALL} {
    background: none;

    ${props =>
      props.active &&
        css`
          ${MenuItemLink}:after {
            ${underLineMenuLink}
          }
        `
    }

    &:hover {
      ${MenuItemLink}:after {
        ${underLineMenuLink}
      }
    }

    .${CLASS_FLOATING} & {
      background: ${({ theme, ...props }) => props.active ? theme.colors.accent: ''};

      &:hover {
        ${MenuItemLink}:after {
          content: unset;
        }
        background: ${({ theme, ...props }) => theme.colors.accent};
      }
    }
  }
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
  zIndex?: number;
}

export const Drawer = styled.div<DrawerStyleProps>`
  position: fixed;
  background: ${({ theme, ...props }) => theme.colors.primary};
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
`;