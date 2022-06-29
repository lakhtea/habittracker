import React from "react";
import ReactDOM from "react-dom/client";
import jwt_decode from "jwt-decode";

//styles
import "./index.css";
import "./vars.css";

//store
import createStore from "./store/store";

//utils
import { setAuthToken } from "./utils/sessionApiUtil";

//components
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

  window.store = store;

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Root store={store} />);
});
