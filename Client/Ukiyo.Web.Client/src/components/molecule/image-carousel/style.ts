import styled from 'styled-components/macro';
import Slick from 'react-slick';
import SlickArrow from '../../atom/slick-arrow';
import Button, { ButtonType } from '../../atom/button';
import * as M from '../../../settings/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, SubsectionTitle } from '../../atom/text/style';
import { center, FLEX_ALIGN_CROSS } from '../../../utilities/mixins';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
`;

export const Slider = styled(Slick)`
  margin-bottom: 2rem;
  
  .slick-dots {
    bottom: 1.5rem;

    li {
      margin: 0;

      button:before {
        color: white;
      }
    }
  }
`;

export const SliderItem = styled.div`
  position: relative;
  padding: 1rem;
  min-height: 16rem;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(22, 22, 34, 0) 0%, rgba(22, 22, 34, 1) 100%);
    width: 100%;
    height: 5rem;
  }

  ${M.MEDIA_XXSMALL} {
    min-height: 18rem;
    padding-left: 2rem;
  }

  ${M.MEDIA_XSMALL} {
    min-height: 23rem;
    padding-left: 3rem;
  }

  ${M.MEDIA_SMALL} {
    min-height: 30rem;
    padding-left: 5rem;

    &:after {
      height: 10rem;
    }
  }

  ${M.MEDIA_MEDIUM} {
    min-height: 35rem;
    padding-left: 7rem;

    &:after {
      height: 14rem;
    }
  }

  ${M.MEDIA_LARGE} {
    min-height: 40rem;
    padding-left: 12rem;
  }
`;

export const BackgroundImage = styled.img`
  top: 0;
  left: 0;
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: auto;

  display: none;

  ${M.MEDIA_SMALL} {
    && {
      display: block;
    }
  }
`;

export const MobileBackgroundImage = styled(BackgroundImage)`
  display: block;

  ${M.MEDIA_SMALL} {
    && {
      display: none;
    }
  }
`;

export const Content = styled.div`
  ${center(FLEX_ALIGN_CROSS)};
  position: relative;
  flex-direction: column;
  margin-top: 2.2rem;
  max-width: 14rem;

  ${M.MEDIA_XXSMALL} {
    max-width: 16rem;
    margin-top: 2.7rem;
  }

  ${M.MEDIA_XSMALL} {
    margin-top: 5.3rem;
  }

  ${M.MEDIA_SMALL} {
    margin-top: 8.5rem;
    max-width: 20rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-top: 10.5rem;
    max-width: 25rem;
  }

  ${M.MEDIA_LARGE} {
    margin-top: 12.5rem;
    max-width: 30rem;
  }
`;

export const Arrow = styled(SlickArrow)`
`;

export const Heading = styled(SubsectionTitle)`
  color: ${({ theme, ...props }) => theme.colors.white};
  font-size: 1.4rem;
  margin-bottom: 0.5rem;

  ${M.MEDIA_XXSMALL} {
    margin-bottom: 0.9rem;
  }

  ${M.MEDIA_XSMALL} {
    font-size: 1.7rem;
  }

  ${M.MEDIA_SMALL} {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 2.5rem;
  }

  ${M.MEDIA_LARGE} {
    font-size: 3rem;
    margin-bottom: 1.8rem;
  }
`;

export const Subtitle = styled(Paragraph)`
  color: ${({ theme, ...props }) => theme.colors.white};
  margin-bottom: 1.2rem;
  width: 90%;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.4rem;
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 1.8rem;
  }
`;

export const LinkButton = styled(Button).attrs({
  type: ButtonType.Info
})`
  align-self: baseline;
`;

export const BookButtonIcon = styled(FontAwesomeIcon).attrs({ icon: faBookOpen })`
  margin-right: 0.3rem;
`;