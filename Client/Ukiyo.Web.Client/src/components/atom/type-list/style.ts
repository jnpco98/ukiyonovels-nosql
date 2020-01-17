import styled, { css } from 'styled-components/macro';
import { Paragraph, SubsectionTitle } from '../text/style';
import * as M from '../../../settings/media';
import { regularFontSize } from '../../../utilities/mixins';


export const TypeListContainer = styled.div`
  width: 100%;
  margin-top: 30rem;
`;

export const TypeTitle = styled(SubsectionTitle)`
  margin-bottom: 0.5rem;
`;

export const TypeListClassifications = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const TypeListClassificationsItem = styled.li`
  margin-right: 0.3rem;

  &:hover {
    text-decoration: underline;
  }
`;