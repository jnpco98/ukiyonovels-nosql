import styled from 'styled-components/macro';
import * as M from '../../../settings/media';
import { Paragraph, Span, SubsectionTitle } from '../../atom/text/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { math } from 'polished';
import { fadeInTextHover, center, CENTER_BOTH, FLEX_ALIGN_BOTH } from '../../../utilities/mixins';
import { transparentize } from 'polished';
import { cardDimRatio } from '../../atom/thumbnail/style';

export const InfoThumbnailContainer = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  margin: auto;
  border-radius: 0.5rem;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(22, 22, 34, 0) 0%, rgba(22, 22, 34, 1) 100%);
    width: 100%;
    height: 7rem;
  }

  transition: all 0.3s ease;

  width: 6.2rem;
  height: ${math(`6.2rem * ${cardDimRatio}`)};

  ${M.MEDIA_SMALL} {
    width: 8.5rem;
    height: ${math(`8.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_XLARGE} {
    width: 9.5rem;
    height: ${math(`9.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_XXLARGE} {
    width: 10.7rem;
    height: ${math(`10.7rem * ${cardDimRatio}`)};
    border-radius: 0.7rem;
  }
`;

export const InfoThumbnailContent = styled.div`
  ${center(FLEX_ALIGN_BOTH)};
  flex-direction: column;
  text-align: center;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  transform: translateY(35%);
  transition: transform 0.3s ease;
  
  ${InfoThumbnailContainer}:hover & {
    background: linear-gradient(to bottom, rgba(22, 22, 34, 0.5) 0%, rgba(22, 22, 34, 1) 100%);
    transform: translateY(0%);
    justify-content: space-around;
  }
`;

export const InfoThumbnailImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
  object-fit: cover;
  
  ${InfoThumbnailContainer}:hover & {
    filter: blur(1px);
  }
`;

export const InfoThumbnailHeading = styled(SubsectionTitle)`
  color: ${({ theme, ...props }) => theme.colors.white};
  padding: 0 0.5rem;
  font-size: 0.5rem;

  ${InfoThumbnailContainer}:hover & {
    margin: 0.2rem 0.3rem;
  }

  ${M.MEDIA_XSMALL} {
    font-size: 0.5rem;
  }
  
  ${M.MEDIA_SMALL} {
    font-size: 0.7rem;
    ${InfoThumbnailContainer}:hover & {
      margin-bottom: 0;
    }
  }

  ${M.MEDIA_XLARGE} {
    font-size: 0.8rem;
  }
`;

export const InfoThumbnailSubtitle = styled(Paragraph)`
	color: ${({ theme, ...props }) => theme.colors.white};
  ${fadeInTextHover(InfoThumbnailContainer)};

  ${InfoThumbnailContainer}:hover & {
    margin: 1rem 0.3rem;
    margin-bottom: 0;
  }
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  font-size: 0.5rem;

  ${M.MEDIA_XSMALL} {
    font-size: 0.5rem;
  }
  
  ${M.MEDIA_SMALL} {
    font-size: 0.6rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 0.7rem;
  }
`;

export const InfoThumbnailGenre = styled(Span)`
	color: ${({ theme, ...props }) => theme.colors.white};
  ${fadeInTextHover(InfoThumbnailContainer)};
  font-size: 0.5rem;

  ${InfoThumbnailContainer}:hover & {
    margin-bottom: 1rem;
  }

  ${M.MEDIA_XSMALL} {
    font-size: 0.5rem;
  }

  ${M.MEDIA_SMALL} {
    font-size: 0.6rem;
  }
  
  ${M.MEDIA_MEDIUM} {
    font-size: 0.7rem;
  }
`;

export const InfoThumbnailReadIconLink = styled.a`
  display: none;
  margin: 1rem 0.5rem 0.5rem;
  border-radius: 50%;
  border: 4px solid ${({ theme, ...props }) => transparentize(0.5, theme.colors.white)};
  transition: border-color 0.3s ease;

  position: relative;
  padding: 14%;

  &:hover {
    border-color: ${({ theme, ...props }) => theme.colors.white};
  }

  ${InfoThumbnailContainer}:hover & {
    display: block;
  }

  ${M.MEDIA_SMALL} {
    border-width: 5px;
  }

  ${M.MEDIA_MEDIUM} {
    border-width: 6px;
  }
`;

export const InfoThumbnailIconWrapper = styled.div`
  ${center(CENTER_BOTH)};
  transform: translate(-50%, -46%);
`;

export const InfoThumbnailReadIcon = styled(FontAwesomeIcon).attrs({ icon: faBookOpen })`
  color: ${({ theme, ...props }) => theme.colors.white};
  ${fadeInTextHover(InfoThumbnailContainer)};

  font-size: 0.9rem;

  ${M.MEDIA_SMALL} {
    font-size: 1.1rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 1.5rem;
  }
`;