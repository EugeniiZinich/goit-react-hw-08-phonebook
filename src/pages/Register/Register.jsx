import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterContainer } from './Register.mui.styled';

export default function Register() {
  return (
    <section>
      <RegisterContainer disableGutters maxWidth={false}>
        <RegisterForm />
      </RegisterContainer>
    </section>
  );
}
