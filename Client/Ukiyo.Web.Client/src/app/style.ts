import styled from 'styled-components/macro';

export const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  .simplebar-scrollbar::before {
    background: ${({ theme, ...props }) => theme.colors.primary};
  }
`;