import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import { margin } from 'polished';
import { RatingListContainer } from "../../organism/rating-list/style";
import { QuickSearchContainer } from "../../organism/quick-search/style";
import RatingList from '../rating-list';
import QuickSearch from '../quick-search';

export const SidePanelContainer = styled.div`
  width: 100%;
`;

export const SidePanelRatings = styled(RatingList)`
  margin-bottom: 1.5rem;

  ${M.MEDIA_XSMALL} {
    margin-bottom: 2.5rem;
  }
`;

export const SidePanelQuickSearch = styled(QuickSearch)`
  margin-bottom: 1.5rem;
  
  ${M.MEDIA_XSMALL} {
    margin-bottom: 2.5rem;
  }
`;