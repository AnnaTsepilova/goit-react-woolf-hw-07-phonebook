import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';

import { PhonePageWrapper, SectionWrapper, Title } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../../redux/contactsSlice';
import { setFilterContact } from '../../redux/filterSlice';
import { getContacts } from '../../redux/selectors';
import Footer from 'components/Footer/Footer';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const addContactApp = payload => {
    let isContactName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(payload.name.toLowerCase())
    );
    let isContactNumber = contacts.filter(contact =>
      contact.number.toLowerCase().includes(payload.number.toLowerCase())
    );

    if (isContactName.length) {
      toast.warn(`Name ${payload.name} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    if (isContactNumber.length) {
      toast.warn(`Number ${payload.number} is already in your contacts`, {
        background: '#eebf31',
        fontSize: '16px',
        width: '350px',
      });
      return;
    }

    dispatch(addContact(payload));
  };

  const contactDeleteHandler = contactId => {
    toast.success('Contact is deleted', {
      fontSize: '16px',
      width: '350px',
    });
    dispatch(deleteContact(contactId));
  };

  return (
    <>
      <PhonePageWrapper>
        <SectionWrapper>
          <Title>Phonebook</Title>
          <ContactForm onSubmit={payload => addContactApp(payload)} />
          <Section title="Contacts">
            <Filter
              filterByName={payload => dispatch(setFilterContact(payload))}
            />
            <ContactsList onDelete={payload => contactDeleteHandler(payload)} />
          </Section>
        </SectionWrapper>
      </PhonePageWrapper>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
