import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { RegisterContainer } from './Register.mui.styled';

export default function Register() {
  return (
    <section>
      <RegisterContainer>
        <RegisterForm />
      </RegisterContainer>
    </section>
  );
}
