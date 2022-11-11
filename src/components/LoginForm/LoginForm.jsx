import useForm from '../../service/hooks/useForm';
import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from "react";
import { Button } from '@mui/material';
import {Container, Input, Label } from "./LoginForm.styled";

import { initialState } from './InitialState';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  const emailId = useMemo(()=> nanoid(), []);
  const passwordId = useMemo(()=> nanoid(), []);

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <Label htmlFor="">
        </Label>
        <Input
        id={emailId}
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
        id={passwordId}
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
    </form>
  );
};

export default LoginForm;
