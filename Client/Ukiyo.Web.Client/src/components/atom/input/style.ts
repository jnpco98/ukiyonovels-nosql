import styled, { css } from 'styled-components/macro';
import { math } from 'polished';

type FieldStyleProps = {
  active?: boolean;
}

export const InputContainer = styled.div`
  position: relative;
  width: 15rem;
`;

export const InputField = styled.input<FieldStyleProps>`
  width: 100%;
  padding-top: 1.3rem;
  border: none;
  cursor: ${props => props.active ? 'text' : 'pointer' };
`;

type LabelStyleProps = {
  active?: boolean;
}

export const InputLabel = styled.label<LabelStyleProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
  transition: all 0.5s ease;
  border-bottom: 1px solid ${({ theme, ...props }) => props.active ? theme.colors.accent : 'black' };

  &:after {
    top: -1px;
    left: 0;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid ${({ theme, ...props }) => theme.colors.accent};
    z-index: 1;
    transition: all 0.3s ease;
    transform: ${props => props.active ? 'translateX(0)' : 'translateX(-110%)' };
  }
`;

export const InputLabelSpan = styled.span<LabelStyleProps>`
  position: absolute;
  transform: translateY(120%);
  transition: all 0.3s ease;
  font-size: ${({ theme, ...props }) => math(`${theme.font.baseSize} * 0.9`)};

  ${props =>
    props.active && 
    css`
      transform: translateY(0);
      font-size: ${({ theme, ...props }) => math(`${theme.font.baseSize} * 0.8`)};
      color: ${({ theme, ...props }) => theme.colors.accent};
    `}
`;