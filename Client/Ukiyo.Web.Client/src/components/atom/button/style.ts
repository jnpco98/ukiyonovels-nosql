import styled, { css } from 'styled-components/macro';
import { lighten } from 'polished';
import { ButtonType } from './index';
import * as M from '../../../settings/media';
import { center, FLEX_ALIGN_MAIN } from '../../../utilities/mixins';

type ButtonStyleProps = {
  flat?: boolean;
  disabled?: boolean;
  buttonType: ButtonType;
}

const Success = css`
  color: ${({ theme, ...props }) => theme.colors.successCompliment};
  background-color: ${({ theme, ...props }) => theme.colors.success};
  
  &:hover {
    color: ${({ theme, ...props }) => theme.colors.success};
    background-color: ${({ theme, ...props }) => theme.colors.successCompliment};
  }
`;

const Warning = css`
  color: ${({ theme, ...props }) => theme.colors.warningCompliment};
  background-color: ${({ theme, ...props }) => theme.colors.warning};
  
  &:hover {
    color: ${({ theme, ...props }) => theme.colors.warning};
    background-color: ${({ theme, ...props }) => theme.colors.warningCompliment};
  }
`;

const Danger = css`
  color: ${({ theme, ...props }) => theme.colors.errorCompliment};
  background-color: ${({ theme, ...props }) => theme.colors.error};
  
  &:hover {
    color: ${({ theme, ...props }) => theme.colors.error};
    background-color: ${({ theme, ...props }) => theme.colors.errorCompliment};
  }
`;

export const ButtonContainer = styled.a<ButtonStyleProps>`
  ${center(FLEX_ALIGN_MAIN)};
  color: ${({ theme, ...props }) => theme.colors.infoCompliment};
  background-color: ${({ theme, ...props }) => theme.colors.info};
  border: 2px solid ${({ theme, ...props }) => theme.colors.infoCompliment};
  padding: 0.6rem 1.2rem;
  font-size: 0.7rem;
  text-transform: uppercase;
  transition: all 0.1s ease-in;
  font-weight: 600;
  font-family: ${({ theme, ...props }) => theme.font.secondary};

  &:hover {
    color: ${({ theme, ...props }) => theme.colors.info};
    background-color: ${({ theme, ...props }) => theme.colors.infoCompliment};
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
    padding: 0.75rem 2rem;
    font-size: 0.8rem;
  }
`;