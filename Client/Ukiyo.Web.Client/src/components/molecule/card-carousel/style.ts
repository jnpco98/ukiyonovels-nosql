import styled, { css, keyframes } from 'styled-components';
import CustomSlickArrow from '../../atom/slick-arrow';
import Slick from 'react-slick';
import * as M from '../../../settings/media';
import Card from '../../atom/card';

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;

  &:before, &:after {
    /* content: ''; */
    position: absolute;
    width: 8%;
    height: 100%;
    top: -8%;
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
  padding-bottom: 100%;
`;

export const Item = styled(Card)`
  position: absolute;
  width: 95%;
  height: 130%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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

  /* padding: 0 2rem; */

  .slick-list {
    overflow: visible;
  }
`;

export const Arrow = styled(CustomSlickArrow)`
`;