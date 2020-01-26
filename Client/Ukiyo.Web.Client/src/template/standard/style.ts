import styled from 'styled-components/macro';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_TOP } from '../../utilities/mixins';
import { SectionTitle } from '../../components/atom/text/style';
import * as M from '../../settings/media';

export const StandardPageContainer = styled.div`
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  ${gutter(GUTTER_TOP)};
`;

export const StandardPageContent = styled.div`
  & + & {
    margin-top: 3rem;
  }

  ${M.MEDIA_SMALL} {
    & + & {
      margin-top: 5rem;
    }
  }
`;

export const StandardPageTitle = styled(SectionTitle).attrs({ as: 'h1' })``;