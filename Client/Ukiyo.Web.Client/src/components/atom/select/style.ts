import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import { center, CENTER_VERTICAL } from '../../../utilities/mixins';
import Simplebar from 'simplebar-react';
import Icon from '../icon';

type SelectStyleType = {
  width?: string;
}

type OptionContainerStyleType = {
  height?: string;
  autoHide?: boolean;
}

export const SelectIcon = styled(Icon)`
  ${center(CENTER_VERTICAL)};
  right: 0.5rem;
  transition: all 0.4s ease-in;
  
  &.active {
    transform: scaleY(-1) translateY(50%);
  }
`;

export const Select = styled.div<SelectStyleType>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width || `100%`};
  position: relative;
`;

export const OptionContainer = styled(Simplebar)<OptionContainerStyleType>`
  width: 100%;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  color: ${({ theme, ...props }) => theme.colors.accent};
  border-radius: 0.5rem;
  overflow: hidden;
  opacity: 0;
  max-height: 0;
  transition: all 0.4s ease-in-out;
  position: absolute !important;
  z-index: 1;
  top: 100%;

  &.active {
    opacity: 1;
    max-height: ${props => props.height || `15rem`};
    overflow-y: visible;
  }
`;

export const OptionSelected = styled.div`
  position: relative;
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  width: 100%;
  background: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
  color: ${({ theme, ...props }) => theme.colors.accent};
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 0.3rem;
`;

export const OptionInput = styled.input.attrs({ type: "radio", hidden: true })`
  cursor: pointer;
`;

export const OptionLabel = styled.label`
  cursor: pointer;
`;

export const Option = styled.div`
  padding: 0.7rem 1.3rem;
  cursor: pointer;
  
  &.selected, &:hover {
    background: ${({ theme, ...props }) => lighten(0.05, theme.colors.accent)};
    ${OptionLabel} {
      color: ${({ theme, ...props }) => theme.colors.backgroundAlternate};
    }
  }
`;