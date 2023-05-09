import { AppBar } from '@mui/material';
import { styled } from '@mui/material/styles';

export const AppBarContainer = styled(AppBar)(({ theme }) => ({
  maxWidth: 1200,
  //   height: '100%',
  //   border: '1px solid red',
  display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  color: '#0cadf2',
  //   flexDirection: 'column',

  background: 'rgba( 10, 111, 229, 0.55 )',
  boxShadow: ' 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
  backdrop: 'blur( 6.5px )',

  borderRadius: '10px',
  border: '1px solid rgba( 255, 255, 255, 0.18 )',
}));

// export const Bar = styled();
