import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.22)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(3px)',

  [theme.breakpoints.between('mobile', 'tablet')]: {
    background: 'transparent',
    boxShadow: 'none',
    backdropFilter: 'none',
  },

  [theme.breakpoints.between('tablet', 'desktop')]: {
    height: '70px',
  },
}));
