import { useState } from 'react';
import { Button } from '@mui/material';
import { Label, TitleH4, Input } from "./Form.styled";

const Form = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.currentTarget.value);
  };

  const changeNumber = event => {
    setNumber(event.currentTarget.value);
  };

  const addToContacts = event => {
    event.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={addToContacts}>
      <div>
        <Label>
          <TitleH4>Name</TitleH4>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={changeName}
            value={name}
          />
        </Label>

        <Label>
          <TitleH4>Number</TitleH4>
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={changeNumber}
            value={number}
          />
        </Label>
      </div>

      <div>
        <Button
          variant="contained"
          type="subbmit"
        >
          Add contact
        </Button>
      </div>
    </form>
  );
};

export default Form;
