import styled from 'styled-components';
import { PageTitle } from '../../atom/text/style';
import SidePanel from '../../organism/side-panel';
import * as M from '../../../settings/media';
import { gutter, GUTTER_TOP, GUTTER_LEFT, GUTTER_RIGHT, GUTTER_BOTTOM } from '../../../utilities/mixins';

export const LatestUpdatesContainer = styled.div`
  width: 100%;
  ${gutter(GUTTER_TOP)};
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  ${gutter(GUTTER_BOTTOM)};
  
  ${M.MEDIA_MEDIUM} {
    display: flex;
  }
`;

export const LatestUpdatesWrapper = styled.div`
  width: 100%;
  ${M.MEDIA_MEDIUM} {
    flex: 1;
    width: 0;
  }
`;

export const LatestUpdatesTitle = styled(PageTitle)`
  ${M.MEDIA_SMALL} {
    margin-bottom: 2rem;
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 3rem;
  }
`;

export const LatestUpdatesSidePanel = styled(SidePanel)`
  margin-top: 4rem;

  ${M.MEDIA_MEDIUM} {
    padding-left: 2rem;
    margin-top: 0.7rem;
    flex: 0.4;
  }

  ${M.MEDIA_LARGE} {
    padding-left: 6rem;
  }

  ${M.MEDIA_XXLARGE} {
    flex: 0.3;
    padding-left: 8rem;
  }
`;
