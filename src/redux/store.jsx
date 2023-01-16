import { configureStore } from '@reduxjs/toolkit';
import { contactReducer } from './contactSlice';
// import storage from 'redux-persist/lib/storage';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { contactReducer } from './contactSlice';
import { filterReducer } from './filtersSlice';

// const persistConfig = {
//   key: 'root',
//   storage,
//   blacklist: ['filter'],
// };

// const persistedContactReducer = persistReducer(
//   persistConfig,
//   contactReducer.reducer
// );

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    name: filterReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
