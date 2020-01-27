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
  top: 0;
  left: 0;
  position: fixed;
  width: 100vw;
  height: 100vh;
  ${center(FLEX_ALIGN_BOTH)};
  opacity: 0;
  background-color: ${({ theme, ...props }) => transparentize(0.3, theme.colors.black)};
  transform: translateY(-100%);
  z-index: ${props => props.zIndex || 0};
  backdrop-filter: blur(5px);
  
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