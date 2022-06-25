import { Routes, Route } from "react-router-dom";

//styles
import styles from "./App.module.css";

//utils
import { AuthRoute, ProtectedRoute } from "../utils/routeUtil";

//components
import Navbar from "./navbar/Navbar";
import LandingPage from "./landingPage/LandingPage";
import Journal from "./journal/Journal";
import Habits from "./habits/Habits";
import Systems from "./systems/Systems";

const App = () => {
  return (
    <div className={styles.container}>
      <Navbar></Navbar>
      <Routes>
        <Route element={<AuthRoute />}>
          <Route exact path="/login" element={<LandingPage />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route exact path="/" element={<Journal />} />
          <Route exact path="/habits" element={<Systems />} />
          <Route exact path="/systems" element={<Habits />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
