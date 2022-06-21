import React from "react";
import ReactDOM from "react-dom/client";
import createStore from "./store/store";
import jwt_decode from "jwt-decode";
import { setAuthToken } from "./utils/sessionApiUtil";
import "./index.css";
import "./vars.css";
import Root from "./components/Root";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);

    const decodedUser = jwt_decode(localStorage.jwtToken);

    const preloadedState = {
      session: { isAuthenticated: true, user: decodedUser },
    };

    store = createStore(preloadedState);
  } else {
    store = createStore({});
  }

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Root store={store} />);
});
