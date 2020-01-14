import styled from 'styled-components/macro';
import { Paragraph } from '../text/style';

export const NovelRowContainer = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NovelRowTitle = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  position: relative;
`;