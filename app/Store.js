"use client";
const { configureStore } = require("@reduxjs/toolkit");
import loginSlice from "./redux/loginSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
  },
});

export default store;
