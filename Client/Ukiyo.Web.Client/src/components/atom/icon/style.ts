import styled, { css } from 'styled-components';
import { math } from 'polished';

type IconStyleProps = {
  size?: string;
  message?: string;
  countColor?: string;
  countBackground?: string;
};

export const Icon = styled.div<IconStyleProps>`
  position: relative;
  display: inline-block;
  width:${props => props.size ? props.size : '2rem'};
  height: ${props => props.size ? props.size : '2rem'};

  ${({ theme, ...props }) =>
    props.message && 
    props.message.trim() &&
    css`
      background-color: transparent;
      &::after {
        content: '${props.message}';
        position: absolute;
        top:  -${math(`${props.size} * 0.1`)};
        left: calc(100% - ${math(`${props.size} * 0.45`)});
        font-size:  ${math(`${props.size} * 0.4`)};
        font-weight: ${theme.font.weightBold};
        font-family: ${theme.font.primary};
        border-radius: ${math(`${props.size} * 0.2`)};
        padding: ${math(`${props.size} * 0.045`)} ${math(`${props.size} * 0.1`)};
        border: ${math(`${props.size} * 0.04`)} solid;
        background: ${props.countBackground ? props.countBackground : 'transparent'};
        color: ${props.countColor ? props.countColor : theme.colors.primary};
      }
    `
  };
`;

export const IconSvg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linejoin: round;
  stroke-miterlimit: 1.414;
`;