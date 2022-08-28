import { useSelector } from 'react-redux';

import { ContactForm, Filter, ContactList } from 'components';
import { getContactsItems } from 'redux/selectors';

export function App() {
  const contacts = useSelector(getContactsItems);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 1 && <Filter />}
      <ContactList />
    </>
  );
}
