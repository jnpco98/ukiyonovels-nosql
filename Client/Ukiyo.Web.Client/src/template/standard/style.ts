import styled from 'styled-components/macro';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../utilities/mixins';
import { margin } from 'polished';
import * as M from '../../settings/media';
import { PageTitle, SectionTitle } from '../../components/atom/text/style';

export const StandardPageContainer = styled.div`
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

export const StandardPageContent = styled.div`
  margin: 0.65rem 0 1.5rem;

  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1.8rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '2rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2.5rem', null)};
  }
  
  ${M.MEDIA_LARGE} {
    ${margin('2.5rem', null, '2.7rem', null)};
  }
`;

export const StandardPageTitle = styled(SectionTitle).attrs({
  as: 'h1'
})`

`;