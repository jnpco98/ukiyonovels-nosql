import styled from 'styled-components';
import * as MQ from '../helpers/media';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  ${MQ.MEDIA_LARGE} {
    width: 90%;
  }

  ${MQ.MEDIA_XLARGE} {
    max-width: ${MQ.XLARGE};
  }
`;