import styled, { css } from 'styled-components/macro';
import { pageTitleFontSize, sectionFontSize, subsectionFontSize, regularFontSize } from '../../../utilities/mixins';

export const PageTitle = styled.h1`
  ${pageTitleFontSize};
`;

export const SectionTitle = styled.h2`
  ${sectionFontSize};
`;

export const SubsectionTitle = styled.h3`
  ${subsectionFontSize};
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