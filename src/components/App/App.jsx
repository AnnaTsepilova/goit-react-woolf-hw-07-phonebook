import React, { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from 'components/ContactForm/ContactForm';
import ContactsList from 'components/ContactsList/ContactsList';
import Section from 'components/Section/Section';
import Filter from 'components/Filter/Filter';
import Footer from 'components/Footer/Footer';
import Loader from 'components/Loader/Loader';

import { PhonePageWrapper, SectionWrapper, Title } from './App.styled';

import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../../redux/operations';
import { setFilterContact } from '../../redux/filterSlice';
import { selectError, selectIsLoading } from '../../redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
            {isLoading && !error ? <Loader /> : <ContactsList />}{' '}
          </Section>
        </SectionWrapper>
      </PhonePageWrapper>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;
