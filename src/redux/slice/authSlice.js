import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router-dom";

import { toast } from "react-toastify";
import API from "../../API";
const initialState = {
  user: {},
  email: "",
  isLoading: false,
  isError: false,
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, matkhau }, { rejectWithValue }) => {
    try {
      const data = {
        email: email,
        matkhau: matkhau,
      };
      const response = await API.post(`login`, data);
      console.log(response.data);
      localStorage.setItem("token", response.data.data.token);

      return response.data;
    } catch (err) {
      toast.error("Vui lòng nhập lại tài khoản và mật khẩu");
      return rejectWithValue(err.response.data);
    }
  }
);

export const register = createAsyncThunk(
  "auth/register",
  async (user, { rejectWithValue }) => {
    const { lastname, email, password, tencongty, sodienthoai, vitri } = user;
    try {
      const data = {
        email: email,
        matkhau: password,
        hovaten: lastname,
        tencongty: tencongty,
        sodienthoai: sodienthoai,
        vitri: vitri,
      };
      const res = await API.post("/resgiter", data);
      console.log(res);
      if (res.status === 200) {
        toast.success("Đăng kí thành công");
        redirect("/login");
      } else {
        // toast.error(res.data.message);
      }
      return true;
    } catch (err) {
      toast.error(err.response.data.message);
      // console.log(err.response.data.message);
      return rejectWithValue(err.response.data);
    }
  }
);
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async (user, { rejectWithValue }) => {
    const { email } = user;
    try {
      const data = {
        login: email,
      };
      await API.post("/wp2023/v1/resetpassword/", data).then((res) => {
        if (res.data.code == 200) {
          toast.success("Đã gửi thông tin");
        } else {
          toast.error(res.data.msg);
        }
      });
      return "ok";
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);
export const updatePassword = createAsyncThunk(
  "auth/updatePassword",
  async ({ crr_password__user, password__user_new }, { rejectWithValue }) => {
    try {
      const data = {
        crr_password__user: crr_password__user,
        password__user_new: password__user_new,
      };
      await API.post("wp2023/v1/changepassword/", data).then((res) => {
        if (res.data.code == 200) {
          toast.success("Đổi mật khẩu thành công");
        } else {
          toast.error(res.data.msg);
        }
      });
      return "ok";
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    logout: (state) => {
      state.user = {};
      localStorage.removeItem("token");
      localStorage.removeItem("infoData");
      localStorage.removeItem("username");
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
    builder.addCase(forgotPassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.email = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(forgotPassword.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(updatePassword.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updatePassword.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(updatePassword.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
