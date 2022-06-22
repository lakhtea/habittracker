import { createReducer } from "@reduxjs/toolkit";

import { receiveCurrentUser } from "../actions/usersActions";

const initialState = {};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(receiveCurrentUser, (state, action) => {
    return Object.assign({}, state, {
      [action.currentUser.id]: action.currentUser,
    });
  });
});

export default usersReducer;
