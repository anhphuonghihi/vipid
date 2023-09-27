import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import API from "../../API";
const initialState = {
  background: "",
  isLoading: false,
  isError: false,
};

export const backgroundChange = createAsyncThunk(
  "background/change",
  async (background, { rejectWithValue }) => {
    try {
      localStorage.setItem("background", background);
      await API.post(`/wp2023/v1/profile/`, {
        background__color: background,
      });
      toast.success("Thay đổi giao diện thành công");
      return background;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(backgroundChange.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(backgroundChange.fulfilled, (state, action) => {
      state.background = action.payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(backgroundChange.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default counterSlice.reducer;
