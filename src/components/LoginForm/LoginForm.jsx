import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { logIn } from 'redux/Auth/operation';
import { Container, Form, Title } from './LoginForm.styled';
import { useAuth } from 'components/hooks/useAuth';
import { Spinner } from 'Loader/Loader';

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
    <Container>
      <Title>Sign in</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <label>
          <TextField
            id="outlined-basic"
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
            id="outlined-basic"
            required
            label="Password"
            minlength="6"
            maxlength="20"
            variant="outlined"
            sx={{ width: '25ch' }}
            value={password}
            onChange={handleChange}
          />
        </label>
        {isRegistered ? (
          <Spinner />
        ) : (
          <Button variant="contained" type="submit">
            Sign in
          </Button>
        )}
      </Form>
    </Container>
  );
};
