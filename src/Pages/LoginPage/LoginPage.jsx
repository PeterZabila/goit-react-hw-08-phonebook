import { useSelector, useDispatch } from 'react-redux';

import LoginForm from '../../components/LoginForm/LoginForm';
import { login } from 'redux/authentication/authentication-operations';
import { getAuthError } from '../../redux/authentication/authentication-selectors';
import { Form, Container, Title } from "./LoginPage.styled";

const LoginPage = () => {
  const dispatch = useDispatch();
  const { status, message } = useSelector(getAuthError);

  const onLogin = data => {
    dispatch(login(data));
  };

  return (
    <Container>
      <Form>
        <Title>Login Page</Title>
        <LoginForm onSubmit={onLogin} />
        {status && <p style={{ color: 'red' }}>{message}</p>}
      </Form>
    </Container>
  );
};

export default LoginPage;
