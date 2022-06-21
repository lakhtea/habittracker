import React from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

//styles
import styles from "./App.module.css";

//utils
// import { AuthRoute, ProtectedRoute } from "../utils/routeUtil";

//components
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";

const App = () => (
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
      <Route exact path="/" element={LandingPage()} />
      {/* <Route exact path="/clothing/:_id" component={ClothingShowContainer} />
      <Route exact path="/search" component={SearchResultsContainer} /> */}
      {/* <AuthRoute exact path="/login" element={LoginFormContainer} /> */}
      {/* <AuthRoute exact path="/signup" element={SignupFormContainer} /> */}
    </Routes>
  </div>
);

export default App;
