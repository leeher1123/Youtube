import { breakPoint } from '../constants/breakPoint';

const { css } = require('styled-components');

const lg = (style) => css`
  @media (max-width: ${breakPoint.LG}px) {
    ${style}
  }
`;

const md = (style) => css`
  @media (max-width: ${breakPoint.MD}px) {
    ${style}
  }
`;

const sm = (style) => css`
  @media (max-width: ${breakPoint.SM}px) {
    ${style}
  }
`;

export const media = {
  lg,
  md,
  sm,
};
