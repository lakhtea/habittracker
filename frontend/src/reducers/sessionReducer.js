import { createReducer } from "@reduxjs/toolkit";

import {
  receiveCurrentUser,
  receiveUserSignIn,
  logoutUser,
} from "../actions/sessionActions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const sessionReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(receiveCurrentUser, (state, action) => {
      const user = action.payload;
      state.isAuthenticated = !!user;
      state.user = user;
    })
    .addCase(receiveUserSignIn, (state) => {
      state.isSignedIn = true;
      state.isAuthenticated = true;
    })
    .addCase(logoutUser, (state) => {
      state.isAuthenticated = false;
      state.user = null;
    });
});

export default sessionReducer;
