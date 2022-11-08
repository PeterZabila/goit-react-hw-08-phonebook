import useForm from '../../service/hooks/useForm';
import { Button } from '@mui/material';
import {Container, Input, Label, Form } from "./LoginForm.styled";

import { initialState } from './InitialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <Form action="" onSubmit={handleSubmit}>
      <Container>
        <Label htmlFor="">
        </Label>
        <Input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
      </Container>
      <Container>
        <Label htmlFor="">
        </Label>
        <Input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
      </Container>
      <Container>
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Container>
    </Form>
  );
};

export default LoginForm;
