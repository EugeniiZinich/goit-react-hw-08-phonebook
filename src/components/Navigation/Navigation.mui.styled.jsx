import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const StyledBox = styled(Box)(({ theme, isopen }) => ({
  display: 'flex',
  transition: 'all 0.3s linear',

  [theme.breakpoints.between('mobile', 'tablet')]: {
    position: 'fixed',
    top: 0,
    left: 0,
    flexDirection: 'column',

    height: '100vh',

    background: 'rgba(255, 255, 255, 0.22)',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(3px)',

    width: 200,
    transform: isopen === 'true' ? 'translateX(0)' : 'translateX(-100%)',

    '& div': {
      marginTop: 40,
      marginLeft: 20,
    },
  },

  [theme.breakpoints.up('tablet')]: {
    '& div': {
      display: 'flex',
      gap: 10,
    },
  },
}));
