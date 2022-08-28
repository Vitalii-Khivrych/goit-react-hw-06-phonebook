import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';

import { useLocalStorage } from 'hooks/useLocalStorage';
import { addContacts } from 'redux/contactsSlice';
import { getContactsItems } from 'redux/selectors';
import {
  SearchForm,
  SearchLabel,
  SearchInput,
  SearchBtn,
} from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useLocalStorage('name', '');
  const [number, setNumber] = useLocalStorage('number', '');
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const contacts = useSelector(getContactsItems);
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();

    const isFindCopyContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isFindCopyContact) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };

    dispatch(addContacts(newContact));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <SearchLabel>
        Name
        <SearchInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
      </SearchLabel>
      <SearchLabel>
        Number
        <SearchInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={evt => setNumber(evt.target.value)}
        />
      </SearchLabel>

      <SearchBtn type="submit">Add contact</SearchBtn>
    </SearchForm>
  );
}
