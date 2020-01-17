import styled from 'styled-components/macro';
import { regularFontSize } from '../../../utilities/mixins';

export const DynamicHTMLContainer = styled.div`
  ${regularFontSize};

  ul {
    list-style: circle;
    padding-left: 2rem;
  }

  p {
    margin-bottom: 0.5rem;
  }
`;