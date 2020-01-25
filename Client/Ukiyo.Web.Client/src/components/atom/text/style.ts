import styled from 'styled-components/macro';
import { pageTitleFontSize, sectionFontSize, subsectionFontSize, regularFontSize, headingDecoration } from '../../../utilities/mixins';
import * as M from '../../../settings/media';

export const PageTitle = styled.h1`
  ${pageTitleFontSize};
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const SectionTitle = styled.h2`
  ${sectionFontSize};
  ${headingDecoration};
  
  overflow: hidden;
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
  text-align: center;
  padding: 0.5rem 0;
  text-transform: uppercase;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }
`;

export const SubsectionTitle = styled.h3`
  ${subsectionFontSize};
  text-transform: uppercase;
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
  margin-bottom: 1rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.2rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 1.5rem;
  }
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