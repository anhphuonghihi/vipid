import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import login__data from "../../data/login.json";
import register__data from "../../data/register.json";
const initialState = {
  user: {},
  isLoading: false,
  isError: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ name, password }) => {
    const data = { username: name, password: password };
    return login__data;
  }
);

export const register = createAsyncThunk("auth/register", async (user) => {
  const { lastname, name, code, email, password, confirmPassword } = user;
  const data = {
    lastname: lastname,
    username: name,
    code: code,
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };
  return register__data;
});

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });

    builder.addCase(register.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(register.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
