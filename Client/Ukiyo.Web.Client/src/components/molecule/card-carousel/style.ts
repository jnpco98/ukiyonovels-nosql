import styled from 'styled-components/macro';
import CustomSlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import Card from '../../atom/card';

export const Container = styled.div`
  width: 100%;
  /* overflow: hidden; */
  position: relative;

  &:before, &:after {
    content: '';
    position: absolute;
    width: 8%;
    height: 100%;
    top: -8%;
    z-index: 1;
  }

  &:before {
    left: 0;
    background: linear-gradient(to left, rgba(22, 22, 34, 0) 0%, rgba(22, 22, 34, 1) 100%);
  }

  &:after {
    right: 0;
    background: linear-gradient(to right, rgba(22, 22, 34, 0) 0%, rgba(22, 22, 34, 1) 100%);
  }
`;

export const ItemWrapper = styled.div`
  position: relative;
`;

export const Item = styled(Card)`
  margin: 0 0.5rem;
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