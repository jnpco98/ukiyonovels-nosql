import styled from 'styled-components/macro';
import Slick from 'react-slick';
import CustomSlickArrow from '../../atom/slick-arrow';
import Button, { ButtonType } from '../../atom/button';
import * as M from '../../../settings/media';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { Paragraph, SubsectionTitle } from '../../atom/text/style';
import { center, FLEX_ALIGN_CROSS, gutter, GUTTER_LEFT, pageTitleFontSize } from '../../../utilities/mixins';

export const ImageCarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 0.65rem;

  ${M.MEDIA_XXSMALL} {
    margin-bottom: 1rem;
  }

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }
  
  ${M.MEDIA_LARGE} {
    margin-bottom: 2.5rem;
  }
`;

export const ImageCarouselSlider = styled(Slick)`
  .slick-dots {
    left: 0;
    bottom: 1.5rem;

    li {
      margin: 0;
    }
  }
`;

export const ImageCarouselSliderItem = styled.div`
  display: flex !important;
  position: relative;
  min-height: 20rem;

  ${gutter(GUTTER_LEFT)};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    pointer-events: none;
    background: linear-gradient(to bottom, rgba(245, 245, 245, 0) 0%, rgba(245, 245, 245, 1) 100%);
    width: 100%;
    height: 5rem;
  }

  ${M.MEDIA_XSMALL} {
    min-height: 26rem;
  }

  ${M.MEDIA_SMALL} {
    min-height: 30rem;

    &:after {
      height: 10rem;
    }
  }

  ${M.MEDIA_MEDIUM} {
    min-height: 37rem;

    &:after {
      height: 14rem;
    }
  }

  ${M.MEDIA_LARGE} {
    min-height: 40rem;
  }

  ${M.MEDIA_XLARGE} {
    min-height: 55rem;
  }
`;

export const ImageCarouselBackgroundImage = styled.img`
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

export const ImageCarouselMobileBackgroundImage = styled(ImageCarouselBackgroundImage)`
  display: block;

  ${M.MEDIA_SMALL} {
    && {
      display: none;
    }
  }
`;

export const ImageCarouselContent = styled.div`
  ${center(FLEX_ALIGN_CROSS)};
  position: relative;
  flex-direction: column;
  max-width: 14rem;

  ${M.MEDIA_XXSMALL} {
    max-width: 16rem;
  }

  ${M.MEDIA_SMALL} {
    max-width: 20rem;
  }

  ${M.MEDIA_MEDIUM} {
    max-width: 25rem;
  }

  ${M.MEDIA_LARGE} {
    max-width: 30rem;
  }
`;

export const Arrow = styled(CustomSlickArrow)`
`;

export const ImageCarouselHeading = styled(SubsectionTitle)`
  color: ${({ theme, ...props }) => theme.colors.white};
  margin-bottom: 0.5rem;

  ${M.MEDIA_XXSMALL} {
    margin-bottom: 0.9rem;
  }

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.2rem;
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 1.8rem;
  }

  ${pageTitleFontSize};
`;

export const ImageCarouselSubtitle = styled(Paragraph)`
  color: ${({ theme, ...props }) => theme.colors.white};
  margin-bottom: 1.2rem;
  width: 90%;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.4rem;
  }

  ${M.MEDIA_LARGE} {
    margin-bottom: 1.8rem;
  }

  ${M.MEDIA_MEDIUM} {
    font-size: 0.9;
  }

  ${M.MEDIA_XLARGE} {
    font-size: 1.1;
  }
`;

export const ImageCarouselLinkButton = styled(Button).attrs({
  type: ButtonType.Info
})`
  align-self: baseline;
    z-index: 1;
`;

export const ImageCarouselBookButtonIcon = styled(FontAwesomeIcon).attrs({ icon: faBookOpen })`
  margin-right: 0.3rem;
`;