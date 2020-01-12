import { css, keyframes, StyledComponent, AnyStyledComponent } from 'styled-components/macro';
import { math, margin, padding } from 'polished';
import * as M from '../settings/media';

export const CENTER_VERTICAL = 'CENTER_VERTICAL';
export const CENTER_HORIZONTAL = 'CENTER_HORIZONTAL';
export const CENTER_BOTH = 'CENTER_BOTH';

export const FLEX_ALIGN_MAIN = `FLEX_ALIGN_MAIN`;
export const FLEX_ALIGN_CROSS = `FLEX_ALIGN_CROSS`;
export const FLEX_ALIGN_BOTH = `FLEX_ALIGN_BOTH`;

export const GUTTER_TOP = 'top';
export const GUTTER_LEFT = 'left';
export const GUTTER_BOTTOM = 'bottom';
export const GUTTER_RIGHT = 'right';

const centerVertical = css`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

const centerHorizontal = css`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

const mainAxisAlignment = css`
  display: flex;
  align-items: center;
`;

const crossAxisAlignment = css`
  display: flex;
  justify-content: center;
`;

export const center = (pos: string) => css`
  ${pos === CENTER_VERTICAL && centerVertical};
  ${pos === CENTER_HORIZONTAL && centerHorizontal};
  ${pos === CENTER_BOTH && css`
    ${centerVertical};
    ${centerHorizontal};
    transform: translate(-50%, -50%);
  `};

  ${pos === FLEX_ALIGN_MAIN && mainAxisAlignment};
  ${pos === FLEX_ALIGN_CROSS && crossAxisAlignment};
  ${pos === FLEX_ALIGN_BOTH && css`
    ${mainAxisAlignment};
    ${crossAxisAlignment};
  `}
`;


type TruncateResponsiveSettings = {
  default: { fontSize: string };
  responsive?: { screenSize: string, fontSize?: string }[];
}

export const truncate = (fontSize: string | TruncateResponsiveSettings, lineHeight: number = 1, linesToShow: number = 1, maxWidth: string = '100%') => css`
  display: block;
  display: -webkit-box;
  max-width: ${maxWidth};
  line-height: ${lineHeight};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
  
  ${typeof fontSize === 'string' &&
    css`
      height: ${math(`${fontSize} * ${lineHeight} * ${linesToShow}`)};
      font-size: ${fontSize};
    `
  };

  ${typeof fontSize === 'object' &&
    css`
      height: ${math(`${fontSize.default.fontSize} * ${lineHeight} * ${linesToShow}`)};
      font-size: ${fontSize.default.fontSize};

      ${fontSize.responsive && fontSize.responsive.length &&
        fontSize.responsive.map(fr => 
          css`
            ${fr.screenSize} {
              height: ${math(`${fr.fontSize} * ${lineHeight} * ${linesToShow}`)};
              font-size: ${fr.fontSize};
            }
          `
        )
      }
    `
  };
`;

export const gradient = (degrees: string, colors: []) => css`
  background: linear-gradient(${degrees}, ${colors.join(',')});
`;

export const fadeInTextHover = (container: AnyStyledComponent) => css`
  transform: scale(0);
  opacity: 0;
  transition-property: transform, opacity;
  transition-duration: 0.3s;
  transition-timing-function: ease;

  ${container}:hover & {
    opacity: 1;
    transform: scale(1);
  }
`;

export const pageTitleFontSize = css`
  ${({ theme, ...props }) => 
    css`
      font-size: ${math(`${theme.font.baseSize} * 1.8`)};
      
      ${M.MEDIA_XSMALL} {
        font-size: ${math(`${theme.font.baseSize} * 2`)};
      }

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 2.4`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 3`)};
      }

      ${M.MEDIA_LARGE} {
        font-size: ${math(`${theme.font.baseSize} * 3.7`)};
      }
  `};
`;

export const sectionFontSize = css`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 1`)};

      ${M.MEDIA_XSMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.1`)};
      }

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.4`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.6`)};
      }

      ${M.MEDIA_LARGE} {
        font-size: ${math(`${theme.font.baseSize} * 2`)};
      }
  `};
`;

export const subsectionFontSize = css`
  ${({ theme, ...props }) => 
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.8`)};

      ${M.MEDIA_XSMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1`)};
      }

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 1.1`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 1.3`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1.4`)};
      }
  `};
`;

export const regularFontSize = css`
  ${({ theme, ...props }) =>
    css`
      font-size: ${math(`${theme.font.baseSize} * 0.7`)};

      ${M.MEDIA_SMALL} {
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
      }

      ${M.MEDIA_MEDIUM} {
        font-size: ${math(`${theme.font.baseSize} * 0.8`)};
      }

      ${M.MEDIA_XLARGE} {
        font-size: ${math(`${theme.font.baseSize} * 1`)};
      }
  `};
`;

export const gutter = (pos: string, useMargin?: boolean) => {
  const gutterFn = useMargin ? margin : padding;

  //#region Gutters CSS
  return css`
    ${({ theme, ...props }) =>
      gutterFn(
        pos == GUTTER_TOP ? theme.gutter.base : null, 
        pos == GUTTER_RIGHT ? theme.gutter.base : null, 
        pos == GUTTER_BOTTOM ? theme.gutter.base : null, 
        pos == GUTTER_LEFT ? theme.gutter.base : null
      )
    }

    ${M.MEDIA_XXSMALL} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.xxsmall : null, 
          pos == GUTTER_RIGHT ? theme.gutter.xxsmall : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.xxsmall : null, 
          pos == GUTTER_LEFT ? theme.gutter.xxsmall : null
        )
      }
    }

    ${M.MEDIA_XSMALL} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.xsmall : null, 
          pos == GUTTER_RIGHT ? theme.gutter.xsmall : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.xsmall : null, 
          pos == GUTTER_LEFT ? theme.gutter.xsmall : null
        )
      }
    }

    ${M.MEDIA_SMALL} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.small : null, 
          pos == GUTTER_RIGHT ? theme.gutter.small : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.small : null, 
          pos == GUTTER_LEFT ? theme.gutter.small : null
        )
      }
    }

    ${M.MEDIA_MEDIUM} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.medium : null, 
          pos == GUTTER_RIGHT ? theme.gutter.medium : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.medium : null, 
          pos == GUTTER_LEFT ? theme.gutter.medium : null
        )
      }
    }

    ${M.LARGE} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.large : null, 
          pos == GUTTER_RIGHT ? theme.gutter.large : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.large : null, 
          pos == GUTTER_LEFT ? theme.gutter.large : null
        )
      }
    }

    ${M.MEDIA_XLARGE} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.xlarge : null, 
          pos == GUTTER_RIGHT ? theme.gutter.xlarge : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.xlarge : null, 
          pos == GUTTER_LEFT ? theme.gutter.xlarge : null
        )
      }
    }

    ${M.MEDIA_XXLARGE} {
      ${({ theme, ...props }) =>
        gutterFn(
          pos == GUTTER_TOP ? theme.gutter.xxlarge : null, 
          pos == GUTTER_RIGHT ? theme.gutter.xxlarge : null, 
          pos == GUTTER_BOTTOM ? theme.gutter.xxlarge : null, 
          pos == GUTTER_LEFT ? theme.gutter.xxlarge : null
        )
      }
    }
  `;
  //#endregion Gutters CSS
}