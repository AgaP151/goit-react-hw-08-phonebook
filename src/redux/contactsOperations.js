import axios from 'axios';
//import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
//import { notifySettings } from '../utils/notifySettings';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// const setAuthorizationToken = token => {
//   axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
// };

export const fetchContacts = createAsyncThunk(
  '/contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  '/contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const { name, number } = contact;
      const response = await axios.post('/contacts', {
        name,
        number,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  '/contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  '/contacts/update',
  async (newContact, thunkAPI) => {
    try {
      const { newName, newNumber } = newContact;
      const response = await axios.patch(`/contacts/${newContact.id}`, {
        name: newName,
        number: newNumber,
      });
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
