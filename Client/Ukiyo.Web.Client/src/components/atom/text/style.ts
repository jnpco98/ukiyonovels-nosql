import styled, { css } from 'styled-components/macro';
import { pageTitleFontSize, sectionFontSize, subsectionFontSize, regularFontSize } from '../../../utilities/mixins';

export const PageTitle = styled.h1`
  ${pageTitleFontSize};
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const SectionTitle = styled.h2`
  ${sectionFontSize};
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const SubsectionTitle = styled.h3`
  ${subsectionFontSize};
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const Paragraph = styled.p`
  ${regularFontSize};
`;

export const Span = styled.span`
  ${regularFontSize};
`;

export const Anchor = styled.a`
  ${regularFontSize};
`;