"use client";
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  token: `typeof window !== "undefined" && (localStorage.getItem("token") ?? null)`,
  msg: "",
  err: "",
  loading: false,
  user_id: null,
};

export const signInUser = createAsyncThunk(
  "signInUser",
  async ({ username, password }) => {
    const { data } = await axios.post(
      "http://localhost:3001/hrmslogin/hrSignin",
      {
        username: username,
        password: password,
      }
    );
    return data;
  }
);

const loginSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToken: (state, action) => {
      if (typeof window !== "undefined") {
        state.token = localStorage.getItem("token");
      }
    },
    addUserId: (state, action) => {
      if (typeof window !== "undefined") {
        state.token = localStorage.getItem("user_id");
      }
    },
    logoutUser: (state, action) => {
      state.token = null;
      // localStorage.removeItem("token");
      if (typeof window !== "undefined") {
        localStorage.clear();
      }
    },
  },
  extraReducers: {
    [signInUser.pending]: (state, action) => {
      state.loading = true;
    },
    [signInUser.fulfilled]: (
      state,
      { payload: { message, code, data } }
    ) => {
      if (code == 200) {
        state.msg = message;
        state.user_id = data.crn_id;
        state.token = data.token;

        if (typeof window !== "undefined") {
          localStorage.setItem("token", data.token);
          localStorage.setItem("user_id", data.crn_id);
        }
        // localStorage.setItem("msg", message);
        state.loading = false;
      } else if (code == 500) {
        state.msg = message;
        state.loading = false;
      }
    },
    [signInUser.rejected]: (state, action) => {
      state.loading = false;
      console.log("first");
    },
  },
});

export const { addToken, addUserId, logoutUser } =
  loginSlice.actions;

export default loginSlice.reducer;
