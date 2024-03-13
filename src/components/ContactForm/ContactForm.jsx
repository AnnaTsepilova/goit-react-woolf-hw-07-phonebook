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
import { selectContacts } from '../../redux/selectors';
import { addContact } from '../../redux/operations';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const items = useSelector(selectContacts);

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

    let isContactName = items.filter(item =>
      item.name.toLowerCase().includes(name.toLowerCase())
    );
    let isContactNumber = items.filter(item =>
      item.phone.toLowerCase().includes(number.toLowerCase())
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
    toast.success('Contact was added', {
      fontSize: '16px',
      width: '350px',
    });
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
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
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
