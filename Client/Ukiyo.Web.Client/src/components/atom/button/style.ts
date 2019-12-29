import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import { ButtonType } from './index';
import * as M from '../../../settings/media';

type ButtonStyleProps = {
  flat?: boolean;
  buttonType: ButtonType;
}

const Success = css`
  color: ${({ theme, ...props }) => theme.colors.successText};
  background-color: ${({ theme, ...props }) => theme.colors.success};
  
  &:hover {
    background-color: ${({ theme, ...props }) => lighten(0.1, theme.colors.success)};
  }
`;

const Warning = css`
  color: ${({ theme, ...props }) => theme.colors.warningText};
  background-color: ${({ theme, ...props }) => theme.colors.warning};
  
  &:hover {
    background-color: ${({ theme, ...props }) => lighten(0.1, theme.colors.warning)};
  }
`;

const Danger = css`
  color: ${({ theme, ...props }) => theme.colors.errorText};
  background-color: ${({ theme, ...props }) => theme.colors.error};
  
  &:hover {
    background-color: ${({ theme, ...props }) => lighten(0.1, theme.colors.error)};
  }
`;

export const Button = styled.a<ButtonStyleProps>`
  display: flex;
  align-items: center;
  color: ${({ theme, ...props }) => theme.colors.infoText};
  background-color: ${({ theme, ...props }) => theme.colors.info};
  padding: 0.6rem 1.2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  border-radius: 7px;
  transition: all 0.1s ease-in;
  font-weight: 600;

  &:hover {
    background-color: ${({ theme, ...props }) => theme.colors.primary};
  }

  ${props => props.buttonType === ButtonType.Success && Success};
  ${props => props.buttonType === ButtonType.Warning && Warning};
  ${props => props.buttonType === ButtonType.Error && Danger};
  
  ${props => 
    props.flat &&
      css`
        border: none;
      `}
  
  ${M.MEDIA_SMALL} {
    padding: 0.7rem 1.5rem;
    font-size: 0.75rem;
  }

  ${M.MEDIA_LARGE} {
    padding: 0.75rem 1.6rem;
    font-size: 0.8rem;
  }
`;