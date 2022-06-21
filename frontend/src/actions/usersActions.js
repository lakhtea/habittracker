import { createAction } from "@reduxjs/toolkit";
import jwt_decode from "jwt-decode";

import * as APIUtil from "../utils/sessionApiUtil";

export const receiveCurrentUser = createAction("receiveCurrentUser");
export const receiveUserSignIn = createAction("receiveUserSignIn");
export const receiveErrors = createAction("receiveErrors");
export const clearErrors = createAction("clearErrors");
export const logoutUser = createAction("logoutUser");

export const signup = (user) => (dispatch) =>
  APIUtil.signup(user).then(
    (res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    },
    (err) => dispatch(receiveErrors(err.response.data))
  );

// Upon login, set the session token and dispatch the current user. Dispatch errors on failure.
export const login = (user) => (dispatch) =>
  APIUtil.login(user)
    .then((res) => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      APIUtil.setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(receiveCurrentUser(decoded));
    })
    .catch((err) => {
      dispatch(receiveErrors(err.response.data));
    });

// We wrote this one earlier
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwtToken");
  APIUtil.setAuthToken(false);
  dispatch(logoutUser());
};
