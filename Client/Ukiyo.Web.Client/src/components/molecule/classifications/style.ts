import styled, { css } from 'styled-components/macro';
import { SubsectionTitle } from '../../atom/text/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, regularFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';
import { margin } from 'polished';

export const ClassificationsContainer = styled.div`
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

export const ClassificationsHeading = styled(SubsectionTitle)`
  ${regularFontSize};
  margin-bottom: 0.3rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.5rem;
  }
`;

type ListStyleProps = {
  inline?: boolean;
}

export const ClassificationsList = styled.ul<ListStyleProps>`
  display: flex;
  ${props => 
    props.inline ?
      css`
        flex-wrap: wrap;
      `:
      css`
        flex-direction: column;
      `}
`;

export const ClassificationsItem = styled.li`
  margin-right: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;