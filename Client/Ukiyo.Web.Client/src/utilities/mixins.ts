import { css } from 'styled-components/macro';
import { math } from 'polished';

export const CENTER_VERTICAL = 'CENTER_VERTICAL';
export const CENTER_HORIZONTAL = 'CENTER_HORIZONTAL';
export const CENTER_BOTH = 'CENTER_BOTH';

export const FLEX_ALIGN_MAIN = `FLEX_ALIGN_MAIN`;
export const FLEX_ALIGN_CROSS = `FLEX_ALIGN_CROSS`;
export const FLEX_ALIGN_BOTH = `FLEX_ALIGN_BOTH`;

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
  `};

  ${pos === FLEX_ALIGN_MAIN && mainAxisAlignment};
  ${pos === FLEX_ALIGN_CROSS && crossAxisAlignment};
  ${pos === FLEX_ALIGN_BOTH && css`
    ${mainAxisAlignment};
    ${crossAxisAlignment};
  `}
`;

export const margin = (top: string, right: string, bottom: string, left: string) => css`
  ${top && css` margin-top: ${top}; `};
  ${right && css` margin-right: ${right}; `};
  ${bottom && css` margin-bottom: ${bottom}; `};
  ${left && css` margin-left: ${left}; `};
`;

export const padding = (top: string, right: string, bottom: string, left: string) => css`
  ${top && css` padding-top: ${top}; `};
  ${right && css` padding-right: ${right}; `};
  ${bottom && css` padding-bottom: ${bottom}; `};
  ${left && css` padding-left: ${left}; `};
`;

export const truncate = (fontSize: string, lineHeight: number = 1, linesToShow: number = 1, maxWidth: string = '100%') => css`
  display: block;
  display: -webkit-box;
  max-width: ${maxWidth};
  height: ${math(`${fontSize} * ${lineHeight} * ${linesToShow}`)};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: ${linesToShow};
  -webkit-box-orient: vertical;
`;

export const gradient = (degrees: string, colors: []) => css`
  background: linear-gradient(${degrees}, ${colors.join(',')});
`;