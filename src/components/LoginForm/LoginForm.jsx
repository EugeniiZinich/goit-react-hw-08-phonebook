import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField, Link } from '@mui/material';
import { logIn } from 'redux/Auth/operation';
import { Form, Title } from './LoginForm.styled';
import { useAuth } from 'components/hooks/useAuth';
import { Spinner } from 'components/Loader/Loader';
import { LoginFormContainer, StyledBtn } from './Login.mui.style';
import googleImg from '../../img/IOS_Google_icon.png';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isRegistered } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    setEmail('');
    setPassword('');
  };

  return (
    <LoginFormContainer disableGutters maxWidth={false}>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Sign in width</Title>
        <Link href="http://localhost:3030/api/auth/google">
          <img
            src={googleImg}
            style={{
              height: 50,
            }}
            alt="google-registration-icon"
          />
        </Link>
        <label>
          <TextField
            label="Email"
            variant="outlined"
            sx={{ width: '25ch' }}
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          <TextField
            type="password"
            name="password"
            required
            label="Password"
            minLength="8"
            maxLength="20"
            variant="outlined"
            sx={{ width: '25ch' }}
            value={password}
            onChange={handleChange}
          />
        </label>
        {isRegistered ? (
          <Spinner />
        ) : (
          <StyledBtn variant="contained" type="submit">
            Sign in
          </StyledBtn>
        )}
      </Form>
    </LoginFormContainer>
  );
};
