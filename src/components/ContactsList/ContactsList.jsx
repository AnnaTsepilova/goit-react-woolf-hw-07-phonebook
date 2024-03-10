import { toast } from 'react-toastify';
import { DeleteButton } from 'components/ContactForm/ContactForm.styled';
import {
  ContactsItem,
  ContactsListContainer,
  Text,
} from './ContactsList.styled';

import { useDispatch, useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getVisibleContacts,
} from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

export default function ContactsList() {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter.filter);

  const onDelete = contactId => {
    toast.success('Contact is deleted', {
      fontSize: '16px',
      width: '350px',
    });
    dispatch(deleteContact(contactId));
  };

  return (
    <ContactsListContainer>
      {visibleContacts.length ? (
        visibleContacts.map(contact => {
          return (
            <ContactsItem key={contact.id}>
              <Text>
                {contact.name}: {contact.number}
              </Text>
              <DeleteButton
                type="button"
                onClick={() => {
                  onDelete(contact.id);
                }}
              >
                Delete
              </DeleteButton>
            </ContactsItem>
          );
        })
      ) : (
        <Text>There is no contact in your phonebook. Add your first!</Text>
      )}
    </ContactsListContainer>
  );
}
