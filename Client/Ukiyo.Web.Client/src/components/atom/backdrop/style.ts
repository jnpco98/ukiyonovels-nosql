import styled, { css } from 'styled-components/macro';

type ContainerStyleProps = {
    show: boolean;
    zIndex?: number;
    transparent?: boolean;
}

export const Container = styled.div<ContainerStyleProps>`
  width: 100%;
  height: 100%;
  background-color: ${({ theme, ...props }) => theme.colors.backdropColor};
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${props => props.zIndex || 2};

  ${props =>
    props.transparent &&
      css`
        background: transparent;  
      `
  };

  ${props =>
    props.show ?
      css`
        display: block;
      `:
      css`
        display: none;
      `
  };
`;