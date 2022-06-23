import React from "react";
import { Routes, Route } from "react-router-dom";

import styles from "./App.module.css";

//utils
import { AuthRoute } from "../utils/routeUtil";

//components
import Navbar from "./navbar/Navbar";
import Journal from "./journal/Journal";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import LandingPage from "./landingPage/LandingPage";

const App = () => {
  // console.log(
  //   AuthRoute({ element: Navbar(), path: "/", exact: true }),
  //   Navbar()
  // );
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Routes>
        {/* <ProtectedRoute exact path="/closet" component={ClosetContainer} />
      <ProtectedRoute
        exact
        path="/clothing/new"
        component={NewClothingFormContainer}
      />
      <ProtectedRoute
        exact
        path="/outfit/new"
        component={NewOutfitFormContainer}
      />
      <ProtectedRoute
        exact
        path="/outfit/:id"
        component={OutfitShowContainer}
      />
      <ProtectedRoute
        exact
        path="/clothing/:id/edit"
        component={EditClothingFormContainer}
      /> */}
        <Route exact path="/" element={Journal()} />
        {/* <Route exact path="/clothing/:_id" component={ClothingShowContainer} />
      <Route exact path="/search" component={SearchResultsContainer} /> */}
        <Route exact path="/login" element={<AuthRoute />}>
          <Route exact path="/login" element={<LandingPage />} />
        </Route>
        {/* <AuthRoute exact path="/signup" element={Signup()} /> */}
      </Routes>
    </div>
  );
};

export default App;
