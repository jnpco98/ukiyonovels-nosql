import styled, { css } from 'styled-components/macro';
import CustomSlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import Card from '../../atom/card';
import Text, { TextType } from '../../atom/text';
import { math } from 'polished';
import { cardDimRatio } from '../../atom/card/style';

const sliderFadeStyle = (start: string, end: string) => css`
  &:before {
    background: linear-gradient(to left, rgba(22, 22, 34, 0) ${start}, rgba(22, 22, 34, 1) ${end});
  }

  &:after {
    background: linear-gradient(to right, rgba(22, 22, 34, 0) ${start}, rgba(22, 22, 34, 1) ${end});
  }
`

export const Container = styled.div`
  width: 100%;
  position: relative;

  ${M.MEDIA_SMALL} {
    padding-top: 2rem;
  }
`;

export const SectionHeading = styled(Text).attrs({
  textType: TextType.SubsectionTitle
})`
  margin: 1.2rem 0;
  padding-left: 1rem;
  text-transform: uppercase;
  color: ${({ theme, ...props }) => theme.colors.accent };

  ${M.MEDIA_XXSMALL} {
    padding-left: 2rem;
    margin-bottom: 1.5rem;
  }

  ${M.MEDIA_XSMALL} {
    padding-left: 3.1rem;
  }

  ${M.MEDIA_SMALL} {
    padding-left: 5rem;
    padding-bottom: 0.5rem;
  }
`;

export const Item = styled(Card)`
  margin-left: 0.6rem;

  ${M.MEDIA_XXSMALL} {
    margin: 0 0.65rem;
  }

  ${M.MEDIA_SMALL} {
    margin: 0 0.75rem;
  }

  ${M.MEDIA_MEDIUM} {
    width: 6.2rem;
    height: ${math(`6.2rem * ${cardDimRatio}`)};
    margin-bottom: 1rem;
  }
`;

export const Slider = styled(Slick)`
  margin-bottom: 2rem;
  
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

  .slick-list {
    overflow: visible;
  }

  &:before, &:after {
    content: '';
    position: absolute;
    width: 10%;
    height: 100%;
    z-index: 1;
    top: 0;
  }

  &:before {
    left: 0;
  }

  &:after {
    right: 0;
  }

  ${sliderFadeStyle('0%', '60%')}

  ${M.MEDIA_XXSMALL} {
    ${sliderFadeStyle('0%', '30%')}
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