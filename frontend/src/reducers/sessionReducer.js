import { createReducer } from "@reduxjs/toolkit";

import { receiveCurrentUser } from "../actions/usersActions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

const sessionReducer = createReducer(initialState, (builder) => {
  //   builder.addCase();
});
