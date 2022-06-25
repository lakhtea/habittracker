import { useState } from "react";

//styles
import styles from "./LandingPage.module.css";

//components
import Login from "../login/Login";
import Signup from "../signup/Signup";

const LandingPage = () => {
  const [registeredUser, setRegisteredUser] = useState(false);
  return (
    <div className={styles.flexContainer}>
      <div class={styles.container}>
        <div class={styles.gif}></div>
      </div>

      {registeredUser ? (
        <Login setRegisteredUser={setRegisteredUser} />
      ) : (
        <Signup setRegisteredUser={setRegisteredUser} />
      )}
    </div>
  );
};

export default LandingPage;
