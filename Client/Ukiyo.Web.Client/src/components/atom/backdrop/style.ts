import styled, { css } from 'styled-components/macro';
import { center, FLEX_ALIGN_BOTH } from '../../../utilities/mixins';
import { transparentize } from 'polished';

type ContainerStyleProps = {
  show: boolean;
  zIndex?: number;
  transparent?: boolean;
  centerChildren?: boolean;
}

export const BackdropContainer = styled.div<ContainerStyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, ...props }) => transparentize(0.3, theme.colors.black)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex || 0};

  ${props =>
    props.transparent &&
      css`
        background: transparent;  
      `
  };

  ${props =>
    props.show ?
      css`
        ${props.centerChildren ? 
            center(FLEX_ALIGN_BOTH) : 
            css`
              display: block;
            `
          };
      `:
      css`
        display: none;
      `
  };

  ${props =>
    props.centerChildren &&
      css`
        align-items:
      `
    };
`;