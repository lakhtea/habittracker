import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const AuthRoute = () => {
  const loggedIn = useSelector((state) => state.session.isAuthenticated);
  return !loggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

// const Protected = ({ element: Component, loggedIn }) => (
//   <Route
//     element={(props) =>
//       loggedIn ? <Component {...props} /> : <Navigate to="/login" replace />
//     }
//   />
// );

// const mapStateToProps = (state) => ({
//   loggedIn: state.session.isAuthenticated,
// });

// export const ProtectedRoute = connect(mapStateToProps)(Protected);
