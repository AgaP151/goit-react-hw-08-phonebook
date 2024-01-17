import { configureStore } from '@reduxjs/toolkit';
//import { contactsSlice } from './contactsSlice';
//import { filterSlice } from './filterSlice';

import { authSlice } from './authSlice';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authSlice),
  },

  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
    }),
});

export const persistor = persistStore(store);
