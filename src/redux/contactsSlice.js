import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';
import Notiflix from 'notiflix';
import { notifySettings } from '../utils/notifySettings';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const isPendingAction = payload => {
  return payload.type.endsWith('pending');
};

const isRejectedAction = payload => {
  return payload.type.endsWith('rejected');
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.success(
          `${payload.name} was successfully added to your contacts`,
          notifySettings
        );
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.info(
          `${payload.name} was successfully deleted from your contacts`,
          notifySettings
        );
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1, payload);
        Notiflix.Notify.success(
          'Your contact was successfully updated',
          notifySettings
        );
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        Notiflix.Notify.failure(
          'Something went wrong, please try again',
          notifySettings
        );
      })

      .addMatcher(isPendingAction, handlePending)
      .addMatcher(isRejectedAction, handleRejected);
  },
});
