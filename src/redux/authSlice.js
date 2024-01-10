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
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        Notiflix.Notify.success(
          'Acount was successfully created',
          notifySettings
        );
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        // console.log(payload);
        state.isLoading = false;
        state.error = payload;
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
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        // console.log(payload);
        Notiflix.Notify.success(
          `Welcome back, ${payload.user.name}!`,
          notifySettings
        );
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.error = payload;
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
      .addCase(logoutUser.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
        Notiflix.Notify.failure(
          'Something went wrong, please try again',
          notifySettings
        );
      })
      .addCase(fetchCurrentUser.pending, onPending)
      .addCase(fetchCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLoggedIn = true;
        Notiflix.Notify.success(
          `Welcome back, ${payload.name}!`,
          notifySettings
        );
      });
    builder.addCase(fetchCurrentUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      if (payload === 401) {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      }
    });
  },
});
