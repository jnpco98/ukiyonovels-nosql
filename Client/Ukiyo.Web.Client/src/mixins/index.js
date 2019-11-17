import { css } from 'styled-components';

export const centerHorizontal = css`
  justify-content: center;
`;

export const centerVertical = css`
  align-items: center;
`;

export const center = css`
  ${centerHorizontal};
  ${centerVertical};
`;