import styled, { css } from 'styled-components';
import { math } from 'polished';

type IconStyleProps = {
  size?: string;
  count?: string;
  countBackground?: string;
};

export const Icon = styled.div<IconStyleProps>`
  position: relative;
  display: inline-block;
  width:${props => props.size ? props.size : '2rem'};
  height: ${props => props.size ? props.size : '2rem'};

  ${({ theme, ...props }) =>
    props.count && 
    props.count.trim() &&
    css`
      background-color: transparent;
      &::after {
        content: '${props.count}';
        position: absolute;
        top: -2px;
        left: calc(100% - 12px);
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
        font-weight: ${theme.font.weightBold};
        background: ${props.countBackground ? props.countBackground : 'transparent'};
        color: ${theme.colors.primary};
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