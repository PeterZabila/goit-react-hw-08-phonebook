import RegisterForm from 'components/RegisterForm/RegisterForm';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Form, Title } from "./RegistrationPage.styled";

import { signup } from '../../redux/authentication/authentication-operations';

import { getAuthError } from '../../redux/authentication/authentication-selectors';

const RegistrationPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onRegister = data => {
    dispatch(signup(data));
  };

  return (
    <Container>
      <Form>
        <Title>Registration Form</Title>
        <RegisterForm onSubmit={onRegister} />
        {status && <p style={{ color: 'red' }}>{message}</p>}
      </Form>
    </Container>
  );
};

export default RegistrationPage;
