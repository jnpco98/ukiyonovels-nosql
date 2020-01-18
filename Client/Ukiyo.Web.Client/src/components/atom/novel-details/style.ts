import styled from 'styled-components/macro';
import { SubsectionTitle } from '../text/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { margin } from 'polished';

export const NovelDetailsContainer = styled.div`
  width: 100%;
  margin: 0.65rem 0;

  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }
`;

export const NovelDetailsType = styled(SubsectionTitle)`
  ${regularFontSize};
  margin-bottom: 0.3rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.5rem;
  }
`;

export const NovelDetailsList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NovelDetailsItem = styled.li`
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;