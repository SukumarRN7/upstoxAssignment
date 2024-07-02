import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {APP_CONFIGS} from '../../../config';

export const getCurrentInvestments = createAsyncThunk(
  'app/getCurrentInvestments',
  async (_, {rejectWithValue}) => {
    try {
      const res = await axios.get(APP_CONFIGS.currentInvestments);
      return res?.data?.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  },
);
