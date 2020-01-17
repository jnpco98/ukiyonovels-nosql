import styled from 'styled-components/macro';
import { center, FLEX_ALIGN_BOTH, FLEX_ALIGN_CROSS, FLEX_ALIGN_MAIN } from '../utilities/mixins';

export const AppContainer = styled.main`
  ${center(FLEX_ALIGN_MAIN)}
  flex-direction: column;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  margin: 0 auto;
  min-height: 100rem;
  line-height: 1.1;
  width: 100%;
  overflow: hidden;

  .simplebar-scrollbar:before {
    background: ${({ theme, ...props }) => theme.colors.primary};
  }
`;