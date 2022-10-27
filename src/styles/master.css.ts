import { Style, init } from '@master/css';

// TODO: Add custom colors when config 2.0 is out
// #ef4444

Style.extend('breakpoints', {
  tablet: '768px',
  laptop: '1024px',
  desktop: '1280px',
});

Style.extend('colors', {
  light: {
    background: {
      primary: '#ffffff',
      secondary: '#f2f3f2',
    },

    text: {
      primary: 'hsl(235, 10%, 15%)',
      secondary: '#a1a5b0',
    },
  },
  dark: {
    background: {
      primary: '#0e0e0e',
      secondary: '#121212',
    },

    text: {
      primary: 'hsl(0, 0%, 100%)',
    },
  },
});

init();
