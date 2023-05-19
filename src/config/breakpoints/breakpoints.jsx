import { createTheme } from '@mui/material';

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 769,
      laptop: 1024,
      desktop: 1440,
    },
  },
});
