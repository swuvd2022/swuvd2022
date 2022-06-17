export const enum size {
  tablet = 768,
}

const theme = {
  brandColor_1: '#5A5FE8',
  brandColor_2: '#E0E0E0',
  brandColor_3: '#FBFDFF',

  isNotDesktop: `@media (max-width: ${size.tablet}px)`,

  minWidth: '360px',
};

export default theme;
