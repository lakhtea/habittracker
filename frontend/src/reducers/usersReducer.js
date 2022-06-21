import { createReducer } from "@reduxjs/toolkit";

import { receiveCurrentUser } from "../actions/usersActions";

// const usersReducer = (state = {}, action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case "RECEIVE_CURRENT_USER":
//       return Object.assign({}, state, {
//         [action.currentUser.id]: action.currentUser,
//       });
//     default:
//       return state;
//   }
// };

const initialState = {};

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(receiveCurrentUser, (state, action) => {
    return Object.assign({}, state, {
      [action.currentUser.id]: action.currentUser,
    });
  });
});

export default usersReducer;
