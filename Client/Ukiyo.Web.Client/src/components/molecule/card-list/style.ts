import styled from 'styled-components/macro';
import InfoCard from '../../atom/info-card';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import Text, { TextType } from '../../atom/text';
import { margin } from 'polished';

export const Container = styled.div`
  margin: 0.6rem 0;
  padding: 1rem;
  margin-right: auto;

  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2.5rem', null, '2.5rem', null)};
  }
  
  ${M.MEDIA_LARGE} {
    ${margin('4rem', null, '4rem', null)};
  }
`;

export const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme, ...props }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme, ...props }) => theme.colors.black};
  padding: 0.5rem 0;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Card = styled(InfoCard)`
  margin-bottom: 1rem
`;

export const HeadingText = styled(Text).attrs({
  textType: TextType.SectionTitle
})`
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
`;