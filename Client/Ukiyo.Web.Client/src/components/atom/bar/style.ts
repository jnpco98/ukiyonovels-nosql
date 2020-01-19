import styled, { css } from 'styled-components/macro';
import { Paragraph } from '../text/style';
import * as M from '../../../settings/media';

type FillStyleProps = {
  rating: number;
  rounded?: boolean;
}

export const BarContainer = styled.div`
  width: 100%;
`;

export const BarTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;

  ${M.MEDIA_SMALL} {
    margin-bottom: 0.5rem;
  }
`;

export const BarTitle = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const BarRating = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const BarFill = styled.div<FillStyleProps>`
  width: 100%;
  height: 0.4rem;

  ${props =>
    props.rounded &&
      css`
        border-radius: 0.5rem;
      `
    }

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