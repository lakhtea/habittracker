import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

import * as APIUtil from "../utils/sessionApiUtil";

export const receiveCurrentUser = createAction("receiveCurrentUser");
export const receiveUserSignIn = createAction("receiveUserSignIn");
// export const receiveErrors = createAction("receiveErrors");
// export const clearErrors = createAction("clearErrors");
export const logoutUser = createAction("logoutUser");

export const signup = createAsyncThunk(
  "receiveUserSignIn",
  async (user, thunkAPI) => {
    try {
      const res = await APIUtil.signup(user);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      thunkAPI.dispatch(receiveCurrentUser(decoded));
    } catch {
      alert("didn't work bro");
    }
  }
);

export const login = createAsyncThunk(
  "receiveUserSignIn",
  async (user, thunkAPI) => {
    try {
      const res = await APIUtil.login(user);
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      thunkAPI.dispatch(receiveCurrentUser(decoded));
    } catch {
      alert("didn't work bro");
    }
  }
);

export const logout = createAsyncThunk("logoutUser", async (_, thunkAPI) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  thunkAPI.dispatch(logoutUser());
});
