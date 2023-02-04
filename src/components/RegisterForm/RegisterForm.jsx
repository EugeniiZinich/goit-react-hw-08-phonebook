import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { register } from 'redux/Auth/operation';
import { Form, Container, Title } from './RegisterForm.styled';
import { useAuth } from 'components/hooks/useAuth';
import { Spinner } from 'Loader/Loader';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { isRegistered } = useAuth();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Create Account</Title>
        <label>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            sx={{ width: '25ch' }}
          />
        </label>
        <label>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            sx={{ width: '25ch' }}
          />
        </label>
        <label>
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            required
            type="password"
            name="password"
            minlength="6"
            maxlength="20"
            value={password}
            onChange={handleChange}
            sx={{ width: '25ch' }}
          />
        </label>
        {isRegistered ? (
          <Spinner />
        ) : (
          <Button variant="contained" type="submit">
            Register
          </Button>
        )}
      </Form>
    </Container>
  );
};
