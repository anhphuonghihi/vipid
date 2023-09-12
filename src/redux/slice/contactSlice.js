import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import { toast } from "react-toastify";
import contact__add__data from "../../data/contact__add.json";
import contact__list__data from "../../data/contact__list.json";
import contact__delete__data from "../../data/contact__delete.json";
import contact__edit__data from "../../data/contact__edit.json";
export const createContact = createAsyncThunk(
  "contact/createContact",
  async ({ createContacttData }, { rejectWithValue }) => {
    try {
      //   const response = await API.post("/contact", createContacttData);
      //   return response.data;
      toast.success("Thêm thông tin liên hệ thành công");
      return contact__add__data;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getContactsByUser = createAsyncThunk(
  "contact/getContactsByUser",
  async (userId, { rejectWithValue }) => {
    try {
      //   const response = await API.get(`/contact/userContacts/${userId}`);
      //   return response.data;
      return contact__list__data;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateContact = createAsyncThunk(
  "contact/updateContact",
  async ({ id, updatedContactData }, { rejectWithValue }) => {
    try {
      //   const response = await API.patch(`/contact/${id}`, updatedContactData);
      //   return response.data;
      toast.success("Cập nhận thông tin liên hệ thành công");
      return contact__edit__data;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async ({ id }, { rejectWithValue }) => {
    try {
      //   const response = await API.delete(`/contact/${id}`);
      //   return response.data;
      toast.success("Xóa thông tin liên hệ thành công");
      return contact__delete__data;
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
    [createContact.pending]: (state, action) => {
      state.loading = true;
    },
    [createContact.fulfilled]: (state, action) => {
      state.loading = false;
      state.contacts = [action.payload];
    },
    [createContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getContactsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getContactsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userContacts = action.payload;
    },
    [getContactsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },

    [updateContact.pending]: (state, action) => {
      state.loading = true;
    },
    [updateContact.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userContacts = state.userContacts.map((item) =>
          item._id === id ? action.payload : item
        );
        state.contacts = state.contacts.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteContact.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteContact.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userContacts = state.userContacts.filter(
          (item) => item._id !== id
        );
        state.contacts = state.contacts.filter((item) => item._id !== id);
      }
    },
    [deleteContact.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = contactSlice.actions;

export default contactSlice.reducer;
