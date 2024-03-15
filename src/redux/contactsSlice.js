import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../redux/operations';
import { handleFulfilled, handlePending, handleRejected } from './hendlers';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
      })

      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })

      .addCase(deleteContact.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1);
      })

      .addMatcher(action => {
        action.type.endsWith('pending');
      }, handlePending)
      .addMatcher(action => {
        action.type.endsWith('fulfilled');
      }, handleFulfilled)
      .addMatcher(action => {
        action.type.endsWith('rejected');
      }, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
