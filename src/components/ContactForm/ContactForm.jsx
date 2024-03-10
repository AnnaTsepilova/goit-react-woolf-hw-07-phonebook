import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';

import {
  Button,
  ContactInput,
  FormContainer,
  Label,
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

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

    let isContactName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );
    let isContactNumber = contacts.filter(contact =>
      contact.number.toLowerCase().includes(number.toLowerCase())
    );

    if (isContactName.length) {
      toast.warn(`Name ${name} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    if (isContactNumber.length) {
      toast.warn(`Number ${number} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    dispatch(addContact({ id: nanoid(), name, number }));
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
