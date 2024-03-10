import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import {
  Button,
  ContactInput,
  FormContainer,
  Label,
} from './ContactForm.styled';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ id: nanoid(), name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>Name</Label>
      <ContactInput
        type="text"
        name="name"
        pattern="^([A-Za-zZА-Яа-яіїІЇ \.]{2,})+$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={handleChange}
        id={nameInputId}
      />
      <Label htmlFor={telInputId}>Number</Label>
      <ContactInput
        type="tel"
        name="number"
        pattern="^\+?3?8?(0\d{9})$"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={handleChange}
        id={telInputId}
      />
      <Button type="submit">Add contact</Button>
    </FormContainer>
  );
};

export default ContactForm;
