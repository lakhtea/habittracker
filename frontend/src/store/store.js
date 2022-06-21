import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "../reducers/rootReducer";

const createStore = (preloadedState = {}) =>
  configureStore({
    reducer: RootReducer,
    preloadedState,
    middleware: [thunk, logger],
  });

export default createStore;
