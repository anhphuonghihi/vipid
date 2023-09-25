import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import { toast } from "react-toastify";


export const getContactsByUser = createAsyncThunk(
  "contact/getContactsByUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get(`/wp2023/v1/profile/`);
      
      return response.data;
    } catch (err) {
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

      var contacts = JSON.parse(localStorage.getItem("contactData"));

      if (contacts != null) {
        // var contact = contacts.filter((x) => x.id === 2).pop();
        // console.log("contacts" + contact);
        var contact = contacts.filter((x) => console.log(x)).pop();
        if (contact != null) {
          contact.img = updatedContactData.name;
        }
        localStorage.setItem("contactData", JSON.stringify(contacts));
      }
      toast.success("Cập nhận thông tin liên hệ thành công");
      return contacts;
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
      // state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = contactSlice.actions;

export default contactSlice.reducer;
