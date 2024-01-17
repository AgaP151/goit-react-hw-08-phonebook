import { createSlice } from '@reduxjs/toolkit';

import {
  registerUser,
  loginUser,
  logoutUser,
  fetchCurrentUser,
} from './authOperations';

function setCommonState(state, action) {
  state.isLoggedIn = true;
  state.user.name = action.payload.user.name;
  state.user.email = action.payload.user.email;
  state.token = action.payload.token;
}

const initialState = {
  isLoggedIn: false,
  user: {name: null, email: null},
  token: null,
  isRefreshing: false,
}

  const authSlices = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(registerUser.fulfilled, setCommonState);
        builder.addCase(loginUser.fulfilled, setCommonState);
        builder.addCase(logoutUser.fulfilled, () => initialState);
        builder.addCase(fetchCurrentUser.pending, (state, action) => {
            state.isRefreshing = true;
        });
        builder.addCase(fetchCurrentUser.rejected, (state, action) => {
            state.isRefreshing = false;
        });
        builder.addCase(fetchCurrentUser.fulfilled, (state, action) => {
            state.isLoggedIn = true;
            state.user.name = action.payload.name;
            state.user.email = action.payload.email;
            state.isRefreshing = false;
        })
    }
});

export const authSlice = authSlices.reducer;