import styled from 'styled-components/macro';

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  min-height: 100rem;

  .simplebar-scrollbar:before {
    background: ${({ theme, ...props }) => theme.colors.primary};
  }
`;