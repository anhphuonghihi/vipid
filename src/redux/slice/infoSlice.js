import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../API";
import { toast } from "react-toastify";
import info__list__data from "../../data/info__list.json";
import axios from "axios";
export const createInfo = createAsyncThunk(
  "info/createInfo",
  async ({ createInfotData }, { rejectWithValue }) => {
    try {
      //   const response = await API.post("/info", createInfotData);
      //   return response.data;

      var infoData = JSON.parse(localStorage.getItem("infoData"));
      if (infoData != null) {
        infoData.push(createInfotData);

        localStorage.setItem("infoData", JSON.stringify(infoData));
      } else {
        var infoData = [];
        infoData.push(createInfotData);
        localStorage.setItem("infoData", JSON.stringify(infoData));
      }
      toast.success("Thêm thông tin cá nhân thành công");
      return infoData;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const getInfosByUser = createAsyncThunk(
  "info/getInfosByUser",
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get(
        `http://phuonghole.com.test/wp-json/wp2023/v1/contact__list__user/`
      );

      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateInfo = createAsyncThunk(
  "info/updateInfo",
  async ({ id, updatedInfoData }, { rejectWithValue }) => {
    try {
      var infos = JSON.parse(localStorage.getItem("infoData"));

      if (infos != null) {
        var info = infos.filter((x) => x.id === updatedInfoData.id).pop();
        if (info != null) {
          info.value_box = updatedInfoData.value_box;
        }
        console.log(info);
        localStorage.setItem("infoData", JSON.stringify(infos));
      }
      toast.success("Cập nhận thông tin cá nhân thành công");
      return infos;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteInfo = createAsyncThunk(
  "info/deleteInfo",
  async ({ id }, { rejectWithValue }) => {
    try {
      //   const response = await API.delete(`/info/${id}`);
      //   return response.data;
      var infoData = JSON.parse(localStorage.getItem("infoData"));
      if (infoData != null) {
        const deletedata = infoData.findIndex((a) => a.id === id);
        infoData.splice(deletedata, 1);
        localStorage.setItem("infoData", JSON.stringify(infoData));
      }

      toast.success("Xóa thông tin cá nhân thành công");
      return infoData;
    } catch (err) {
      toast.error(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

const infoSlice = createSlice({
  name: "info",
  initialState: {
    info: {},
    infos: [],
    userInfos: [],
    tagInfos: [],
    relatedInfos: [],
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
    [createInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [createInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.infos = [action.payload];
    },
    [createInfo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [getInfosByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getInfosByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.userInfos = action.payload;
    },
    [getInfosByUser.rejected]: (state, action) => {
      state.loading = false;
      // state.error = action.payload.message;
    },

    [updateInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [updateInfo.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userInfos = state.userInfos.map((item) =>
          item._id === id ? action.payload : item
        );
        state.infos = state.infos.map((item) =>
          item._id === id ? action.payload : item
        );
      }
    },
    [updateInfo.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload.message;
    },
    [deleteInfo.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteInfo.fulfilled]: (state, action) => {
      state.loading = false;
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.userInfos = state.userInfos.filter((item) => item._id !== id);
        state.infos = state.infos.filter((item) => item._id !== id);
      }
    },
    [deleteInfo.rejected]: (state, action) => {
      state.loading = false;
      // state.error = action.payload.message;
    },
  },
});

export const { setCurrentPage } = infoSlice.actions;

export default infoSlice.reducer;
