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
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme, ...props }) => transparentize(0.3, theme.colors.black)};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex || 0};

  ${center(FLEX_ALIGN_BOTH)};
  transform: translateY(-100%);
  opacity: 0;

  ${props =>
    props.transparent &&
      css`
        background: transparent;  
      `
  };

  ${props =>
    props.show &&
      css`
        transform: translateY(0);
        opacity: 1;
      `
    };


  ${props =>
    props.centerChildren &&
      css`
        align-items:
      `
    };
`;