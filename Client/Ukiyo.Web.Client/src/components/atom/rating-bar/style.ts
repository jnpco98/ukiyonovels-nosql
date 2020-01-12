import styled, { css } from 'styled-components/macro';
import { Paragraph } from '../text/style';
import { gutter, GUTTER_LEFT, GUTTER_RIGHT, subsectionFontSize } from '../../../utilities/mixins';
import * as M from '../../../settings/media';

type RatingBarStyleProps = {
  rating: number;
}

export const RatingContainer = styled.div`
  width: 100%;
  ${gutter(GUTTER_LEFT)};
  ${gutter(GUTTER_RIGHT)};

  margin-bottom: 0.8rem;
`;

export const RatingTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.5rem;
  }
`;

export const RatingTitle = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const RatingNumeric = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const RatingBar = styled.div<RatingBarStyleProps>`
  width: 100%;
  height: 0.4rem;

  ${({ theme, ...props }) =>
    css`
      background-color: ${theme.colors.primary};
      background-image: linear-gradient(90deg, ${theme.colors.black}, ${theme.colors.black});
      background-size: ${props.rating * 100}% 100%;
      background-repeat: no-repeat;
    `   
  }

  ${M.MEDIA_SMALL} {
    height: 0.5rem;
  }
`;