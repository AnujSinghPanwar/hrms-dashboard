"use client";
import {
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { mainLink } from "./axiosLink";
import { toast } from "react-toastify";

const value = typeof window !== "undefined";

const initialState = {
  token: null,
  msg: "",
  err: "",
  loading: false,
  user: value
    ? JSON.parse(localStorage.getItem("loggedInUser"))
      ? JSON.parse(localStorage.getItem("loggedInUser"))
      : null
    : "",
};

export const signInAuth = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const { data } = await mainLink.post(
        "hrmslogin/hrSignin",
        {
          username: user.username,
          password: user.password,
        }
      );
      if (data.code === 200) {
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            token: data.data.token,
            id: data.data.crn_id,
          })
        );
        mainLink.defaults.headers["x-csrf-token"] =
          data.data.token;
        return await data.data;
      } else {
        return thunkAPI.rejectWithValue(data.message);
      }
    } catch (err) {
      const { message } = err.rejectWithValue(data.massage);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const loginSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      if (typeof window !== "undefined") {
        state.user = null;
        state.message = "User Logged Out!";
        localStorage.removeItem("loggedInUser");
      }
    },
  },
  extraReducers: (buider) => {
    buider
      .addCase(signInAuth.pending, (state) => {
        state.token = null;
        state.user = null;
        state.loading = true;
      })
      .addCase(signInAuth.fulfilled, (state, action) => {
        state.user = {
          token: action.payload.token,
          id: action.payload.crn_id,
        };
        state.loading = false;
        state.msg = "Login Successfully ";
      })
      .addCase(signInAuth.rejected, (state, action) => {
        toast.error(action.payload);
        state.msg = action.payload;
        state.loading = false;
      });
  },
});

export const { logout } = loginSlice.actions;

export default loginSlice.reducer;

// // const link = "https://api.mscorpres.net:3001/hrmslogin/hrSignin"
// const link = "http://localhost:3001/hrmslogin/hrSignin";

// const value = typeof window !== "undefined";
// const initialState = {
//   token: value ? localStorage.getItem("token") ?? null : "",
//   msg: "",
//   err: "",
//   loading: false,
//   user_id: null,
// };

// export const signInUser = createAsyncThunk(
//   "signInUser",
//   async ({ username, password }) => {
//     const { data } = await axios.post(link, {
//       username: username,
//       password: password,
//     });
//     console.log(data);
//     axios.defaults.headers["x-csrf-token"] =
//       data.data.token;
//     return data;
//   }
// );

// const loginSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     addToken: (state, action) => {
//       if (typeof window !== "undefined") {
//         state.token = localStorage.getItem("token");
//       }
//     },
//     addUserId: (state, action) => {
//       if (typeof window !== "undefined") {
//         state.token = localStorage.getItem("user_id");
//       }
//     },
//     logoutUser: (state, action) => {
//       state.token = null;
//       // localStorage.removeItem("token");
//       if (typeof window !== "undefined") {
//         localStorage.clear();
//       }
//     },
//   },
//   extraReducers: {
//     [signInUser.pending]: (state, action) => {
//       state.loading = true;
//     },
//     [signInUser.fulfilled]: (
//       state,
//       { payload: { message, code, data } }
//     ) => {
//       if (code == 200) {
//         state.msg = message;
//         state.user_id = data.crn_id;
//         state.token = data.token;

//         if (typeof window !== "undefined") {
//           localStorage.setItem("token", data.token);
//           localStorage.setItem("user_id", data.crn_id);
//         }
//         // localStorage.setItem("msg", message);
//         state.loading = false;
//       } else if (code == 500) {
//         state.msg = message;
//         state.loading = false;
//       }
//     },
//     [signInUser.rejected]: (state, action) => {
//       state.loading = false;
//       console.log("first");
//     },
//   },
// });

// export const { addToken, addUserId, logoutUser } =
//   loginSlice.actions;

// export default loginSlice.reducer;
