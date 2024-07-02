import {createSlice} from '@reduxjs/toolkit';
import {RESET_STORE} from '../../resetStore';
import * as AppThunk from './appThunk';
import {TInitialAppState} from './type';

const initialAppState: TInitialAppState = {
  investments: {
    current: [],
    loading: true,
    hasError: false,
  },
};

export const AppSlice = createSlice({
  name: 'app',
  initialState: initialAppState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(RESET_STORE, () => initialAppState);
    builder.addCase(
      AppThunk?.getCurrentInvestments?.fulfilled,
      (state, action) => {
        state.investments.current = action?.payload?.userHolding ?? [];
        state.investments.hasError = false;
        state.investments.loading = false;
      },
    );
    builder.addCase(AppThunk?.getCurrentInvestments?.pending, state => {
      state.investments.loading = true;
    });
    builder.addCase(AppThunk?.getCurrentInvestments?.rejected, state => {
      state.investments.loading = false;
      state.investments.hasError = true;
    });
  },
});
