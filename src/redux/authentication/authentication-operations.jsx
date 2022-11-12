import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../service/api/authentication';

export const signup = createAsyncThunk(
  '/users/signup',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.signup(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  '/users/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk(
  '/users/logout',
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      const { status, data } = response;
      const error = {
        status,
        message: data.message,
      };
      return rejectWithValue(error);
    }
  }
);

export const current = createAsyncThunk(
  '/users/current',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;
 
    if (!token) {
      return thunkAPI.rejectWithValue('No valid token');
    }

    console.log("Refreshing user");

    try {
      const res = await api.getCurrent(token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);