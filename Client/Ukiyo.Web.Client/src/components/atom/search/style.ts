import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import { center, FLEX_ALIGN_BOTH } from '../../../utilities/mixins';

export const SearchInput = styled.input.attrs({ type: 'text' })`
  width: 0;
  border: none;
  background: none;
  transition: all 0.24s linear;
  color: ${({ theme, ...props }) => theme.colors.primary};

  &::placeholder {
    color: ${({ theme, ...props }) => lighten(0.2, theme.colors.primary)};
  }
`;

type ContainerStyleProps = {
  active?: boolean;
}

export const SearchContainer = styled.div<ContainerStyleProps>`
  ${center(FLEX_ALIGN_BOTH)};
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  border-radius: 2.5rem;

  ${props =>
    props.active &&
      css`
        ${SearchInput} {
          padding-left: 1rem;
          width: 10rem;
        }
      `
    }
`;

export const SearchButton = styled.button`
  ${center(FLEX_ALIGN_BOTH)};
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;padding: 0.3rem 0.4rem;
`;