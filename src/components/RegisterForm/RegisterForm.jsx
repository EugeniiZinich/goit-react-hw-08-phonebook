import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/Auth/authOperation';
import { Form, Title } from './RegisterForm.styled';
import { useAuth } from 'components/hooks/useAuth';
import { Spinner } from 'components/Loader/Loader';
import {
  RegisterFormContainer,
  StyledBtn,
  StyledTextField,
} from './RegisterForm.mui.style';
import { SubscriptionRadio } from 'components/SubscriptionRadio/SubscriptionRadio';
import googleImg from '../../img/IOS_Google_icon.png';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [subscription, setSubscription] = useState('');
  const { isRegistered } = useAuth();

  console.log(subscription);

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
        subscription,
      })
    );
    form.reset();
  };

  return (
    <RegisterFormContainer>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Title>Sign UP width</Title>
        <a href="https://contacts-04gv.onrender.com/api/auth/google">
          <img
            src={googleImg}
            style={{
              height: 50,
            }}
            alt="google-registration-icon"
          />
        </a>

        <label>
          <StyledTextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            required
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            sx={{ width: '305px' }}
          />
        </label>
        <label>
          <StyledTextField
            label="Email"
            variant="outlined"
            required
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            sx={{ width: '305px' }}
          />
        </label>
        <label>
          <StyledTextField
            label="Password"
            variant="outlined"
            required
            type="password"
            name="password"
            minLength="8"
            maxLength="20"
            value={password}
            onChange={handleChange}
            sx={{ width: '305px' }}
          />
        </label>
        <SubscriptionRadio subscription={setSubscription} />

        {isRegistered ? (
          <Spinner />
        ) : (
          <StyledBtn variant="contained" type="submit">
            Sign UP
          </StyledBtn>
        )}
      </Form>
    </RegisterFormContainer>
  );
};
