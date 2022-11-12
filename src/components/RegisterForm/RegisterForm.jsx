import useForm from '../../service/hooks/useForm';
import { Button } from '@mui/material';
import { Section, Input, Label } from "./RegisterForm.styled";

import { initialState } from './initialState';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange } = useForm({
    initialState,
    onSubmit,
  });

  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    onSubmit({
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const { name, email, password } = state;

  return (
    <form action="" onSubmit={handleSubmit}>
      <Section>
        <Label htmlFor="">
        </Label>
        <Input
          value={name}
          name="name"
          onChange={handleChange}
          type="text"
          placeholder="Name"
          required
        />
      </Section>
      <Section>
        <Label htmlFor="">
        </Label>
        <Input
          value={email}
          name="email"
          onChange={handleChange}
          type="email"
          placeholder="Email"
        />
      </Section>
      <Section>
        <Label htmlFor="">
        </Label>
        <Input
          value={password}
          name="password"
          onChange={handleChange}
          type="password"
          placeholder="Password"
        />
      </Section>
      <Section>
        <Button variant="contained" type="submit">
          Registration
        </Button>
      </Section>
    </form>
  );
};

export default RegisterForm;
