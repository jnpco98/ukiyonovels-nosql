import styled, { css, keyframes } from 'styled-components';
import * as M from '../../../settings/media';
import { Paragraph, Span } from '../text/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { math } from 'polished';
import { fadeInTextHover, center, CENTER_BOTH, FLEX_ALIGN_BOTH } from '../../../utilities/mixins';
import { transparentize } from 'polished';

export const cardDimRatio = 1.5;

export const Container = styled.div`
  display: flex;
  position: relative;
  
  width: 6.2rem;
  height: ${math(`6.2rem * ${cardDimRatio}`)};
  overflow: hidden;
  margin: auto;
  
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

  ${M.MEDIA_SMALL} {
    width: 8.5rem;
    height: ${math(`8.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_MEDIUM} {
    width: 9.5rem;
    height: ${math(`9.5rem * ${cardDimRatio}`)};
  }

  ${M.MEDIA_XLARGE} {
    width: 10.7rem;
    height: ${math(`10.7rem * ${cardDimRatio}`)};
  }
`;

export const Content = styled.div`
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
  
  ${Container}:hover & {
    background: linear-gradient(to bottom, rgba(22, 22, 34, 0.5) 0%, rgba(22, 22, 34, 1) 100%);
    transform: translateY(0%);
    justify-content: space-around;
  }
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;

  ${Container}:hover & {
    filter: blur(1px);
  }
`;

export const Heading = styled(Paragraph).attrs({ as: 'h3' })`
  color: ${({ theme, ...props }) => theme.colors.white};
  
  ${Container}:hover & {
    margin: 0.5rem 0.3rem;
  }

  ${M.MEDIA_SMALL} {
    ${Container}:hover & {
      margin-bottom: 0;
    }
  }
`;

export const Subtitle = styled(Paragraph)`
	color: ${({ theme, ...props }) => theme.colors.white};
  ${fadeInTextHover(Container)};

  ${Container}:hover & {
    margin: 1rem 0.3rem;
    margin-bottom: 0;
  }
`;

export const Genre = styled(Span)`
	color: ${({ theme, ...props }) => theme.colors.white};
  ${fadeInTextHover(Container)};
  font-size: 0.5rem;

  ${Container}:hover & {
    margin-bottom: 1rem;
  }

  ${M.MEDIA_SMALL} {
    font-size: 0.6rem;
  }
  ${M.MEDIA_MEDIUM} {
    font-size: 0.7rem;
  }
`;

export const ReadIconLink = styled.a`
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

  ${Container}:hover & {
    display: block;
  }

  ${M.MEDIA_SMALL} {
    border-width: 5px;
  }

  ${M.MEDIA_MEDIUM} {
    border-width: 6px;
  }
`;

export const IconWrapper = styled.div`
  ${center(CENTER_BOTH)};
  transform: translate(-50%, -46%);
`;

export const ReadIcon = styled(FontAwesomeIcon).attrs({
	icon: faBookOpen
})`
  color: ${({ theme, ...props }) => theme.colors.white};
  ${fadeInTextHover(Container)};

  font-size: 0.9rem;

  ${M.MEDIA_SMALL} {
    font-size: 1.1rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 1.5rem;
  }
`;