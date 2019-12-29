import styled, { css } from 'styled-components';

export const Container = styled.div`
  z-index: 10;

  &.slick-prev {
    left: 0.5rem;
  }

  &.slick-next {
    right: 0.5rem;
  }
`;