import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { CreateUser,CheckUser } from './authAPI';
 
const initialState = {
  loggedInUser: null,
  status: 'idle',
  error: null
};

export const CreateUserAsync = createAsyncThunk(
  'user/CreateUser',
  async (userData) => {
    const response = await CreateUser(userData);
    return response.data;
  }
);
export const CheckUserAsync = createAsyncThunk(
  'user/CheckUser',
  async (loginInfo) => {
    const response = await CheckUser(loginInfo);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CreateUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CreateUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(CheckUserAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(CheckUserAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.loggedInUser = action.payload;
      })
      .addCase(CheckUserAsync.rejected, (state, action) => {
        state.status = 'idle';
        state.error = action.error;
      })
      
      ;
  },
});

export const {increment} = counterSlice.actions;
export const selectLoggedInUser = (state) => state.auth.loggedInUser;
export const selectError = (state) => state.auth.error;

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
