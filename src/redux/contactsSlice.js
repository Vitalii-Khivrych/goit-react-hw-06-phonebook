import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import initialContacts from 'data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts,',
  initialState: {
    items: [...initialContacts],
    filter: '',
  },
  reducers: {
    addContacts: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };

      // used immer------

      //fixedReducer2:(state, action) => {
      // state.items.push(action.payload);
      // }

      // or
      //  fixedReducer1: (state, action) => void state.push(action.payload),
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

//export
export const contactsReducer = contactsSlice.reducer;
export const { addContacts, deleteContacts, changeFilter } =
  contactsSlice.actions;

//LocalStorage
const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const persistContactsReducer = persistReducer(
  persistConfig,
  contactsReducer
);
