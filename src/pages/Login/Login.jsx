import { LoginForm } from 'components/LoginForm/LoginForm';
import { LoginContainer } from './Login.mui.styled';

export default function Login() {
  return (
    <section>
      <LoginContainer disableGutters maxWidth={false}>
        <LoginForm />
      </LoginContainer>
    </section>
  );
}
