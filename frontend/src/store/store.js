import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";

import RootReducer from "../reducers/rootReducer";

const createStore = (preloadedState) =>
  configureStore({
    reducer: RootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

export default createStore;
