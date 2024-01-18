import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../utils/notifySettings';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const setAuthorizationToken = token => {
  axios.defaults.headers.common.Authorization = token ? `Bearer ${token}` : '';
};

export const fetchCurrentUser = createAsyncThunk(
  'contacts/fetchCurrentUser',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      if (error.request.status === 401) {
        Notiflix.Notify.failure(
          `Something went wrong, please log in again`,
          notifySettings
        );
        return thunkAPI.rejectWithValue(error.request.status);
      }
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }
);
export const registerUser = createAsyncThunk(
      'user/register', async (credentials, thunkAPI) => {
  const store = thunkAPI.getState();
  const token = store.auth.token;
  if (token) {
    try {
      const response = await axios.post('/users/signup', credentials);
      setAuthorizationToken(response.data.token);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }}
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, thunkAPI) => {
    const store = thunkAPI.getState();
  const token = store.auth.token;
  if (token) {
    try {
      const response = await axios.post('/users/login', credentials);
      setAuthorizationToken(response.data.token);
      return response.data;
    } catch (error) {
      Notiflix.Notify.failure(`${error.message}`, notifySettings);
      return thunkAPI.rejectWithValue(error.request.status);
    }
  }}
);

export const logoutUser = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    const store = thunkAPI.getState();
    const token = store.auth.token;
    
    if (token) {
      setAuthorizationToken(token);
      
      try {
        const response = await axios.post('/users/logout', null,  {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        
              
        return response.data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      } finally {
      
        setAuthorizationToken(null);
      }
    }
  }
);