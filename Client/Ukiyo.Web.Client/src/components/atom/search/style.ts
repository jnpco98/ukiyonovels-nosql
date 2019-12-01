import styled from 'styled-components/macro';
import { lighten } from 'polished';

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

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  border-radius: 2.5rem;
  &.active {
    ${SearchInput} {
      padding-left: 1rem;
      width: 10rem;
    }
  }
`;

export const SearchButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  cursor: pointer;
  border-radius: 50%;padding: 0.3rem 0.4rem;
`;