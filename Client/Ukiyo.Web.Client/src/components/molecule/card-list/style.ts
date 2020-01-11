import styled from 'styled-components';
import InfoCard from '../../atom/info-card';
import * as M from '../../../settings/media';

export const Container = styled.div`
  margin: 0.6rem;
  padding: 1rem;
  margin-right: auto;

  ${M.MEDIA_XXSMALL} {
    padding-left: 2rem;
  }

  ${M.MEDIA_XSMALL} {
    padding-left: 3rem;
  }

  ${M.MEDIA_SMALL} {
    padding-left: 5rem;
    max-width: 40rem;
  }

  ${M.MEDIA_MEDIUM} {
    padding-left: 6rem;
    max-width: 54rem;
  }
  
  ${M.MEDIA_LARGE} {
    padding-left: 12rem;
    max-width: 70rem;
  }
`;

export const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: ${({ theme, ...props }) => theme.colors.accent};
  color: ${({ theme, ...props }) => theme.colors.white};
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  margin-bottom: 1rem;
`;

export const Card = styled(InfoCard)`
  margin-bottom: 1rem
`;