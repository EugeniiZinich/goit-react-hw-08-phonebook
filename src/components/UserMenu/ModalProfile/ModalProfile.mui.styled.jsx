import styled from '@emotion/styled';
import { TextField } from '@mui/material';
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
