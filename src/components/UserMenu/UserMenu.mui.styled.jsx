import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import Badge from '@mui/material/Badge';

export const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));

export const LogoutBtn = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  padding: '15',
  borderRadius: '10rem',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '1rem',
  letterSpacing: '.15rem',
  transition: 'all .3s ease-out',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  width: 150,
  height: 40,

  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#0cf',
    border: '10rem',
    zIndex: -2,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '0%',
    height: '100%',
    backgroundColor: '#2f8da4',
    transition: 'all .3s ease-out',
    borderRadius: '10rem',
    zIndex: -1,
  },
  '&:hover::before ': {
    width: '100%',
  },

  '&:hover svg': {
    position: 'absolute',
    left: 0,
    transform: 'rotate(180deg)',
  },
}));
