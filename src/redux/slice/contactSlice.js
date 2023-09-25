import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import { toast } from "react-toastify";

export const getContactsByUser = createAsyncThunk(
  "contact/getContactsByUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get(`/wp2023/v1/profile/`);

      return response.data.data[0];
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contact/updateContact",
  async (fullname, { rejectWithValue }) => {
    try {
      const response = await API.post(`/wp2023/v1/profile/`, {
        fullname: fullname,
      });
      toast.success("Cập nhận thông tin cá nhân thành công");
      return response.data;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const contactSlice = createSlice({
  name: "contact",
  initialState: {
    contact: {},
    contacts: [],
    userContacts: [],
    tagContacts: [],
    relatedContacts: [],
    currentPage: 1,
    numberOfPages: null,
    error: "",
    loading: false,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getContactsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getContactsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userContacts = action.payload;
    },
    [getContactsByUser.rejected]: (state, action) => {
      state.loading = false;
      // state.error = action.payload.message;
    },

    [updateContact.pending]: (state, action) => {
      state.loading = true;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.loading = false;
    },
    [updateContact.rejected]: (state, action) => {
      state.loading = false;
      // state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = contactSlice.actions;

export default contactSlice.reducer;
