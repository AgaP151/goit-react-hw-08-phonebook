import axios from 'axios';
import Notiflix from 'notiflix';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { notifySettings } from '../utils/notifySettings';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthorizationToken = token => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};


export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
   'contacts/addContact',

  async (contact, thunkApi) => {
    try {
      const { name, number } = contact;
      const response = await axios.post(`/contacts/`, {
        name,
        number,
      });
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (newContact, thunkAPI) => {
    try {
      const { newName, newNumber } = newContact;
      const response = await axios.patch(`/contacts/${newContact.id}`, {
        name: newName,
        number: newNumber,
      });
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const verifyUser = createAsyncThunk(
  '/users/verify',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    if (token) {
      setAuthorizationToken(token);
      try {
        const response = await axios.get(`/users/verify`);
        return response.data;
      } catch (err) {
        return thunkAPI.rejectWithValue(err.message);
      }
    }
    return thunkAPI.rejectWithValue('No token');
  }
);