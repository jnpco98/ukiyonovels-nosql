import styled, { css } from 'styled-components/macro';
import { math } from 'polished';

type BarStyleProps = {
    width?: string;
    height?: string;
    rounded?: boolean;
}

type FillStyleProps = {
    fillRate?: number;
}

export const Bar = styled.span<BarStyleProps>`
    position: relative;
    width: ${(props) => props.width || '100%'};
    height: ${(props) => props.height || '0.8rem'};
    background: ${({ theme, ...props }) => props.color ? props.color : theme.colors.subdued};
    border: 1px solid rgba(0, 0, 0, 0.3);
    ${props =>
      props.rounded &&
      css`
        border-radius: ${math(`${props.height || '0.8rem'} * 0.5`)}
      `};
    overflow: hidden;
`;

export const Fill = styled.span<FillStyleProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: ${props => props.fillRate * 100}%;
    height: 100%;
    background: ${({ theme, ...props }) => props.color ? props.color : theme.colors.accent};
`;