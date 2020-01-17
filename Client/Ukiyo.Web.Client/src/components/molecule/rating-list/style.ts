import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import { margin } from 'polished';
import { SectionTitle } from '../../atom/text/style';
import { RatingContainer } from '../../atom/rating-bar/style';

export const RatingListContainer = styled.div`
  width: 100%;
  
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  
  ${RatingContainer} {
    margin-bottom: 0.5rem;
  }

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
    
    ${RatingContainer} {
      margin-bottom: 0.8rem;
    }
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }
  
  ${M.MEDIA_LARGE} {
    ${margin('2.5rem', null, '2.5rem', null)};
        
    ${RatingContainer} {
      margin-bottom: 1rem;
    }
  }
`;