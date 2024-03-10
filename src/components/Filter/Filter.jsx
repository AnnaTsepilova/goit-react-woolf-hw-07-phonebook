import { ContactInput } from 'components/ContactForm/ContactForm.styled';
import { FilterText } from './Filter.styled';

export default function Filter({ searchQuery, filterByName }) {
  return (
    <div>
      <FilterText>Find contacts by name</FilterText>
      <ContactInput
        type="text"
        value={searchQuery}
        onChange={event => filterByName(event.target.value)}
      />
    </div>
  );
}
