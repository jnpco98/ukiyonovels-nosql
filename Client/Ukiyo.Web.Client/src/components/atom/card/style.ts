import styled, { css } from 'styled-components';
import * as M from '../../../settings/media';
import { Paragraph, Span } from '../text/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: 6.7rem;
  height: 9.7rem;
  
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
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 25%;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 2;
  display: flex;
  justify-content: center;
  
`;

export const Heading = styled(Paragraph).attrs({ as: 'h3' })`
  color: ${({ theme, ...props }) => theme.colors.white};
  margin: 0.5rem;
`;

export const Subtitle = styled(Paragraph)`
	color: ${({ theme, ...props }) => theme.colors.white};
	margin-bottom: 0.5rem;

  display: none;
`;

export const Genre = styled(Span)`
	color: ${({ theme, ...props }) => theme.colors.white};
  display: none;
`;

export const ReadIcon = styled(FontAwesomeIcon).attrs({
	icon: faBookOpen
})`
  color: ${({ theme, ...props }) => theme.colors.white};
  display: none;
`;