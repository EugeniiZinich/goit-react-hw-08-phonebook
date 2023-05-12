import styled from '@emotion/styled';
import { Container } from '@mui/material';
import img from '../../img/pexels-ylanite-koppens-1906440.jpg';

export const RegisterContainer = styled(Container)(() => ({
  height: '100vh',
  backgroundImage: `url(${img})`,
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}));
