import styled from 'styled-components';
import Backdrop from '../../atom/backdrop';
import { transparentize } from 'polished';

type SearchOverlayContainerStyleProps = {
  transition?: string;
}

export const SearchOverlayContainer = styled(Backdrop)<SearchOverlayContainerStyleProps>`
  background: ${({ theme, ...props }) => transparentize(0.3, theme.colors.black)};
  transition: ${props => props.transition};
`;