import styled from 'styled-components/macro';
import InfoCard from '../../atom/info-card';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import Text, { TextType } from '../../atom/text';
import { margin } from 'polished';
import { SectionTitle } from '../../atom/text/style';

export const CardListContainer = styled.div`
  margin: 0.65rem 0;

  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }
  
  ${M.MEDIA_LARGE} {
    ${margin('2.5rem', null, '2.5rem', null)};
  }
`;

export const CardListSectionDivider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme, ...props }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme, ...props }) => theme.colors.black};
  padding: 0.5rem 0;
  text-transform: uppercase;
  margin-bottom: 1rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }
`;

export const CardListItem = styled(InfoCard)`
  margin-bottom: 2rem;
  position: relative;

  &:not(:last-child) {
    &:after {
      content: '';
      width: 100%;
      height: 1px;
      background:  ${({ theme, ...props }) => theme.colors.primary};
      position: absolute;
      bottom: -1rem;
      left: 0;
    }
  }
`;

export const CardListHeadingText = styled(SectionTitle)`
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
`;

export const CardListRowDivider = styled.div`
  width: 100%;
  height: 1px;
  background: darkgrey;
  margin: -0.5rem 0 0.5rem;
`;