import styled from 'styled-components/macro';
import CustomSlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import InfoThumbnail from '../../atom/info-thumbnail';
import Text, { TextType } from '../../atom/text';
import { math, margin } from 'polished';
import { Genre, Heading, Subtitle, ReadIcon } from '../../atom/info-thumbnail/style';
import { cardDimRatio } from '../../atom/thumbnail/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT } from '../../../utilities/mixins';
import { SectionTitle } from '../../atom/text/style';

export const Container = styled.div`
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

export const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${({ theme, ...props }) => theme.colors.black};
  border-bottom: 2px solid ${({ theme, ...props }) => theme.colors.black};
  padding: 0.5rem 0;
  text-transform: uppercase;
  margin-bottom: 1rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 1.5rem;
  }

  ${M.MEDIA_MEDIUM} {
    margin-bottom: 2rem;
  }
`;

export const HeadingText = styled(SectionTitle)`
  font-weight: ${({ theme, ...props }) => theme.font.weightBold};
`;

export const Item = styled(InfoThumbnail)`
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

    ${Heading} {
      font-size: 0.8rem;
    }

    ${Subtitle} {
      font-size: 0.8rem;
    }

    ${Genre} {
      font-size: 0.6rem;
    }

    ${ReadIcon} {
      font-size: 1.3rem;
    }
  }

  ${M.MEDIA_XLARGE} {
    width: 9.5rem;
    height: ${math(`9.5rem * ${cardDimRatio}`)};

    ${Heading} {
      font-size: 0.9rem;
    }

    ${Subtitle} {
      font-size: 0.9rem;
    }

    ${Genre} {
      font-size: 0.7rem;
    }

    ${ReadIcon} {
      font-size: 1.5rem;
    }
  }
`;

export const Slider = styled(Slick)`  
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

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0 2rem;

  ${M.MEDIA_MEDIUM} {
    padding: 0 3rem;
  }

  ${M.MEDIA_LARGE} {
    padding: 0 12rem;
    justify-content: flex-start;
  }
`;

export const Arrow = styled(CustomSlickArrow)`
  /* top: -1.5rem;

  &.slick-prev {
    right: 4.5rem;
    left: unset;
  }

  &.slick-next {
    right: 2rem;
  } */
`;