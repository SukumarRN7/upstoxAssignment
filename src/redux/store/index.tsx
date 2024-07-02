import {combineReducers, configureStore} from '@reduxjs/toolkit';

import {AppSlice} from '../rtk/app';

const reducer = combineReducers({
  app: AppSlice.reducer,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof reducer>;

export default store;
