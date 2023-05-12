import styled from '@emotion/styled';
import { Container, Button } from '@mui/material';

export const LoginFormContainer = styled(Container)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
}));

export const StyledBtn = styled(Button)(() => ({
  display: 'inline-block',
  padding: ' .75rem 1.25rem',
  borderRadius: '10rem',
  color: '#fff',
  textTransform: 'uppercase',
  fontSize: '1rem',
  letterSpacing: '.15rem',
  transition: 'all .3s',
  position: 'relative',
  overflow: 'hidden',
  zIndex: 1,
  width: 305,

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
    transition: 'all .3s',
    borderRadius: '10rem',
    zIndex: -1,
  },
  '&:hover::before ': {
    width: '100%',
  },
}));
