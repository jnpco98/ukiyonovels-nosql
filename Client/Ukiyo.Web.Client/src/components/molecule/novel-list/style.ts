import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import { margin } from 'polished';
import { RowContainer } from '../../atom/row/style';

export const NovelListContainer = styled.div`
  width: 100%;
  
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  ${RowContainer} {
    padding: 0.7rem;

    &:nth-child(odd) {
      background: ${({ theme, ...props }) => theme.colors.default};
    }

    &:nth-child(even) {
      background: ${({ theme, ...props }) => theme.colors.subdued};
    }
    
    &:hover {
      color: ${({ theme, ...props }) => theme.colors.white};
      background: ${({ theme, ...props }) => theme.colors.accent};
    }
  }

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
    
    ${RowContainer} {
      padding: 0.8rem;
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
        
    ${RowContainer} {
      padding: 0.9rem;
    }
  }
`;