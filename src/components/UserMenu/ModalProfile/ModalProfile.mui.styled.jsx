import styled from '@emotion/styled';
import { Button, TextField } from '@mui/material';
import { HomeBtn } from 'components/Home/Home.mui.style';

export const StyledTextField = styled(TextField)(() => ({
  marginBottom: 20,

  '& .MuiInputBase-root': {
    height: '40px',
  },

  '& .MuiFormLabel-root': {
    top: '-7px',
  },
}));

export const EditBtn = styled(HomeBtn)(() => ({
  width: 210,
  margin: 'auto',
}));

export const StyledEditBtn = styled(Button)(() => ({
  color: '#fff',
  backgroundColor: '#0cf',
  width: 150,
  height: 40,
  borderRadius: '10rem',

  '&:hover': {
    backgroundColor: '#2f8da4',
  },
}));

export const boxStyle = {
  position: 'absolute',
  display: 'grid',
  playsItem: 'center',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,

  p: 4,
};

export const iconStyle = {
  height: '17px',
  color: '#fff',
  marginLeft: 1,
  marginBottom: 0.5,
};
