import { useSelector, useDispatch } from 'react-redux';

import { ContactItem } from '../ContactItem/ContactItem';
import { List, Item } from './ContactList.styled';
import { deleteContacts } from 'redux/contactsSlice';
import { getContactsItems, getFilter } from 'redux/selectors';

export function ContactList() {
  const contacts = useSelector(getContactsItems);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const renderContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      {renderContacts().map(({ id, name, number }) => (
        <Item key={id}>
          <ContactItem
            name={name}
            number={number}
            onClick={() => dispatch(deleteContacts(id))}
          />
        </Item>
      ))}
    </List>
  );
}
