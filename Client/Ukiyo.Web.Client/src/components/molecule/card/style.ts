import styled from 'styled-components';
import Button from '../../atom/button';
import * as M from '../../../settings/media';

export const Card = styled.div`
  display: flex;
`;

export const CardImage = styled.img`
  flex: 1;
`;

export const CardContent = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 1rem;

  ${M.MEDIA_MEDIUM} {
    margin-left: 1.5rem;
  }

  ${M.MEDIA_XLARGE} {
    margin-left: 2rem;
  }
`;

export const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const CardButton = styled(Button)``;

export const CardMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;