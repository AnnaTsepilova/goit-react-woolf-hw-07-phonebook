import { DeleteButton } from 'components/ContactForm/ContactForm.styled';
import {
  ContactsItem,
  ContactsListContainer,
  Text,
} from './ContactsList.styled';

import { useSelector } from 'react-redux';
import {
  getContacts,
  getFilter,
  getVisibleContacts,
} from '../../redux/selectors';

export default function ContactsList({ onDelete }) {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const visibleContacts = getVisibleContacts(contacts, filter.filter);

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
