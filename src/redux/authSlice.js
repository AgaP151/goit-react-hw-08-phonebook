import { createSlice } from '@reduxjs/toolkit';
import Notiflix from 'notiflix';
import { notifySettings } from '../utils/notifySettings';
import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authOperations';

const onPending = state => {
  state.isLoading = true;
 };

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, onPending)
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
          Notiflix.Notify.success(
          'Acount was successfully created',
          notifySettings
        );
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        if (state.error === 400 || state.error === 401) {
          Notiflix.Notify.warning(
            'This account already exists, please log in',
            notifySettings
          );
        } else {
          Notiflix.Notify.failure(
            'Something went wrong, please try again',
            notifySettings
          );
        }
      })
      .addCase(loginUser.pending, onPending)
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      
        Notiflix.Notify.success(
          `Welcome back, ${action.payload.user.name}!`,
          notifySettings
        );
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        if (state.error === 400 || state.error === 401) {
          Notiflix.Notify.warning(
            "This account doesn't exist, please sign up",
            notifySettings
          );
        } else {
          Notiflix.Notify.failure(
            'Something went wrong, please try again',
            notifySettings
          );
        }
      })
      .addCase(logoutUser.pending, onPending)
      .addCase(logoutUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        Notiflix.Notify.info('See you again', notifySettings);
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
        Notiflix.Notify.failure(
          'Something went wrong, please try again',
          notifySettings
        );
      })
      .addCase(fetchCurrentUser.pending, onPending)
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        state.isLoggedIn = true;
        Notiflix.Notify.success(
          `Welcome back, ${action.payload.name}!`,
          notifySettings
        );
      });
    builder.addCase(fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      if (action.payload === 401) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }
    });
  },
});
