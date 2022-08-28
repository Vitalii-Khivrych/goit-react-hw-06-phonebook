import { createSlice } from '@reduxjs/toolkit';

import initialContacts from 'data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts,',
  initialState: {
    items: [...initialContacts],
    filter: '',
  },
  reducers: {
    addContacts: (state, action) => {
      return { ...state, items: [...state.items, action.payload] };
    },

    deleteContacts: (state, action) => {
      return {
        ...state,
        items: state.items.filter(({ id }) => id !== action.payload),
      };
    },

    changeFilter: (state, action) => {
      return {
        ...state,
        filter: action.payload,
      };
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts, changeFilter } =
  contactsSlice.actions;

export const getContactsItems = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
