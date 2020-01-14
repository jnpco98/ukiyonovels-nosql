import styled from 'styled-components/macro';
import { Paragraph, Anchor } from '../text/style';

export const QSRowTitle = styled(Anchor)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  position: relative;
  margin-left: 0.7rem;

  &:before {
    content: "";
    position: absolute;
    width: 5px;
    height: 5px;
    background: ${({ theme, ...props }) => theme.colors.accent};
    top: 50%;
    left: -0.7rem;
    transform: translateY(-50%);
  }
`;

export const QSRowCount = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const QSRowContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  &:hover {
    ${QSRowTitle}, ${QSRowCount} {
      text-decoration: underline;
    }
  }
`;