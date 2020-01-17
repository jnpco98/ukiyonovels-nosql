import styled from 'styled-components/macro';
import CustomSlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import InfoThumbnail from '../../atom/info-thumbnail';
import Text, { TextType } from '../../atom/text';
import { math, margin } from 'polished';
import { InfoThumbnailGenre, InfoThumbnailHeading, InfoThumbnailSubtitle, InfoThumbnailReadIcon } from '../../atom/info-thumbnail/style';
import { cardDimRatio } from '../../atom/thumbnail/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import { SectionTitle } from '../../atom/text/style';

export const InfoThumbnailContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0.65rem 0;

  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};
  
  ${M.MEDIA_XSMALL} {
    ${margin('1rem', null, '1rem', null)};
  }

  ${M.MEDIA_SMALL} {
    ${margin('1.5rem', null, '1.5rem', null)};
  }

  ${M.MEDIA_MEDIUM} {
    ${margin('2rem', null, '2rem', null)};
  }
  
  ${M.MEDIA_LARGE} {
    ${margin('2.5rem', null, '2.5rem', null)};
  }
`;

export const InfoThumbnailItem = styled(InfoThumbnail)`
  margin-right: 0.65rem;

  ${M.MEDIA_XXSMALL} {
    margin-right: 0.9rem;
  }

  ${M.MEDIA_SMALL} {
    margin-right: 1.2rem;
  }

  ${M.MEDIA_MEDIUM} {
    width: 8rem;
    height: ${math(`8rem * ${cardDimRatio}`)};
    margin-bottom: 1.5rem;

    ${InfoThumbnailHeading} {
      font-size: 0.8rem;
    }

    ${InfoThumbnailSubtitle} {
      font-size: 0.8rem;
    }

    ${InfoThumbnailGenre} {
      font-size: 0.6rem;
    }

    ${InfoThumbnailReadIcon} {
      font-size: 1.3rem;
    }
  }

  ${M.MEDIA_XLARGE} {
    width: 9.5rem;
    height: ${math(`9.5rem * ${cardDimRatio}`)};

    ${InfoThumbnailHeading} {
      font-size: 0.9rem;
    }

    ${InfoThumbnailSubtitle} {
      font-size: 0.9rem;
    }

    ${InfoThumbnailGenre} {
      font-size: 0.7rem;
    }

    ${InfoThumbnailReadIcon} {
      font-size: 1.5rem;
    }
  }
`;

export const InfoThumbnailSlider = styled(Slick)`  
  .slick-dots {
    left: 0;
    bottom: -2rem;

    li {
      margin: 0;

      button:before {
        color: white;
      }
    }
  }

  ${M.MEDIA_SMALL} {
    &:before, &:after {
      width: 14%;
    }
  }
`;

export const InfoThumbnailArrow = styled(CustomSlickArrow)`
`;