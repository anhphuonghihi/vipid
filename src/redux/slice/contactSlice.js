import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import { toast } from "react-toastify";
import contact__list__data from "../../data/contact__list.json";
export const createContact = createAsyncThunk(
  "contact/createContact",
  async ({ createContacttData }, { rejectWithValue }) => {
    try {
      //   const response = await API.post("/contact", createContacttData);
      //   return response.data;
      var contactData = JSON.parse(localStorage.getItem("contactData"));
      contactData.push(createContacttData);
      localStorage.setItem("contactData", JSON.stringify(contactData));
      toast.success("Thêm thông tin liên hệ thành công");
      return contactData;
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
      localStorage.setItem(
        "contactData",
        JSON.stringify(contact__list__data["contact"][userId])
      );
      var contactData = JSON.parse(localStorage.getItem("contactData"));
      return contactData;
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

export const deleteContact = createAsyncThunk(
  "contact/deleteContact",
  async ({ id }, { rejectWithValue }) => {
    try {
      //   const response = await API.delete(`/contact/${id}`);
      //   return response.data;
      var contactData = JSON.parse(localStorage.getItem("contactData"));
      if (contactData != null) {
        const deletedata = contactData.boxs.findIndex((a) => a.id === id);
        console.log(contactData);
        contactData.splice(deletedata, 1);
        console.log(contactData);
        localStorage.setItem("contactData", JSON.stringify(contactData));
      }

      toast.success("Xóa thông tin liên hệ thành công");
      return contactData;
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
      // state.error = action.payload.message;
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
      // state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = contactSlice.actions;

export default contactSlice.reducer;
