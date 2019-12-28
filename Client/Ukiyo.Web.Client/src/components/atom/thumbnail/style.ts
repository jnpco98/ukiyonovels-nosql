import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { MEDIA_MEDIUM, MEDIA_LARGE } from '../../../settings/media';

export const ThumbnailContent = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  transform: translateY(80%);
  transition: all 0.2s ease-in;
  background: ${({ theme, ...props }) => rgba(theme.colors.black, 0.5)};
  color: ${({ theme, ...props }) => theme.colors.backgroundSecondary};
  padding: 0.2rem;
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Thumbnail = styled.a`
  position: relative;
  width: 6.5rem;
  height: 9rem;
  overflow: hidden;
  transition: all 0.15s ease-in;

  &:hover {
    transform: scale(1.1);
    z-index: 1;

    ${ThumbnailContent} {
      transform: translateY(0);
    }  
  }

  ${MEDIA_MEDIUM} {
    width: 8rem;
    height: 11rem;
  }

  ${MEDIA_LARGE} {
    width: 11rem;
    height: 16rem;
  }

`;