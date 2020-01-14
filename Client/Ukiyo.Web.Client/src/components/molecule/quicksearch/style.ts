import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import { margin } from 'polished';
import { SectionTitle } from '../../atom/text/style';
import { QSRowContainer } from '../../atom/qs-row/style';

export const QuickSearchContainer = styled.div`
  width: 100%;
  
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  
  ${QSRowContainer} {
    margin-bottom: 0.5rem;
  }

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
    
    ${QSRowContainer} {
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
        
    ${QSRowContainer} {
      margin-bottom: 1rem;
    }
  }
`;

export const QuickSearchSectionDivider = styled.div`
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

export const QuickSearchHeadingText = styled(SectionTitle)`
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
`;