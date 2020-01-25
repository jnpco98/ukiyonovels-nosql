import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { headingDecoration } from '../../../utilities/mixins';
import { RowContainer } from '../../atom/row/style';
import Text, { TextType } from '../../atom/text';
import SimpleBar from 'simplebar-react';

export const QuickSearchContainer = styled.div`
  width: 100%;
  
  ${RowContainer} {
    margin-bottom: 0.5rem;
  }

  ${M.MEDIA_XSMALL} {
    ${RowContainer} {
      margin-bottom: 0.8rem;
    }
  }
  
  ${M.MEDIA_LARGE} {
    ${RowContainer} {
      margin-bottom: 1rem;
    }
  }
`;

export const QuickSearchHeading = styled(Text).attrs({ textType: TextType.SubsectionTitle })`
  ${headingDecoration};
  text-align: center;
  position: relative;
  width: 100%;
  overflow: hidden;
`;



type QuickSearchRowsStyleProps = {
  height?: string;
  autoHide?: boolean;
}

export const QuickSearchRows = styled(SimpleBar)<QuickSearchRowsStyleProps>`
  max-height: ${props => props.height || `30rem`};
`;