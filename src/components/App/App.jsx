import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';

import { PhonePageWrapper, SectionWrapper, Title } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { setFilterContact } from '../../redux/filterSlice';
import { getContacts } from '../../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  return (
    <>
      <PhonePageWrapper>
        <SectionWrapper>
          <Title>Phonebook</Title>
          <ContactForm />
          <Section title="Contacts">
            <Filter
              filterByName={payload => dispatch(setFilterContact(payload))}
            />
            {contacts.length > 0 && <ContactsList />}
          </Section>
        </SectionWrapper>
      </PhonePageWrapper>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
