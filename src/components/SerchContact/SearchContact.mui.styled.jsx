import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const StyledTextField = styled(TextField)(() => ({
  background: 'rgba(255, 255, 255, 0.22)',
  borderRadius: '16px',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(3px)',

  '& label.Mui-focused': {
    color: '#fff',
  },

  '& label': {
    color: 'white',
  },

  '& fieldset': {
    outline: 'none',
    border: 'none',
  },
}));
