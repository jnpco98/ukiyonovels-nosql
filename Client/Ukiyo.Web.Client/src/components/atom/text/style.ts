import styled, { css } from 'styled-components/macro';
import { PageTitleFontSize, SectionFontSize, SubsectionFontSize, RegularFontSize } from '../../../utilities/mixins';

export const PageTitle = styled.h1`
  ${PageTitleFontSize};
`;

export const SectionTitle = styled.h2`
  ${SectionFontSize};
`;

export const SubsectionTitle = styled.h3`
  ${SubsectionFontSize};
`;

export const Paragraph = styled.p`
  ${RegularFontSize};
`;

export const Span = styled.span`
  ${RegularFontSize};
`;

export const Anchor = styled.a`
  ${RegularFontSize};
`;