import { DefaultTheme } from 'styled-components';

export const enum size {
  tablet = 768,
}

const theme: DefaultTheme = {
  minWidth: '360px',

  brandColor_1: '#5A5FE8',
  brandColor_2: '#E0E0E0',
  brandColor_3: '#FBFDFF',

  tablet: `@media (max-width: ${size.tablet}px)`,
};

export default theme;
