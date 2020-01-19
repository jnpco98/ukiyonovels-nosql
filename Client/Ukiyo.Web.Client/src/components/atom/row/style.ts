import styled, { css } from 'styled-components/macro';
import { Paragraph, Anchor } from '../text/style';

type TitleStyleProps = {
  bullet?: boolean;
}

type ContainerStyleProps = {
  hoverDecoration?: boolean;
}

export const RowTitle = styled(Anchor)<TitleStyleProps>`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
  position: relative;

  ${props => 
    props.bullet &&
      css`
        margin-left: 0.7rem;
        
        &:before {
          content: "";
          position: absolute;
          width: 5px;
          height: 5px;
          background: ${({ theme, ...props }) => theme.colors.accent};
          top: 50%;
          left: -0.7rem;
          transform: translateY(-50%);
        }
      `
    }
`;

export const RowCount = styled(Paragraph)`
  font-family: ${({ theme, ...props }) => theme.font.secondary};
`;

export const RowContainer = styled.div<ContainerStyleProps>`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${props => 
    props.hoverDecoration &&
    css`
      &:hover {
        ${RowTitle}, ${RowCount} {
          text-decoration: underline;
        }
      }
    `
  }
`;