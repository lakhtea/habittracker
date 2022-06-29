import { useState } from "react";

//styles
import styles from "./LandingPage.module.css";

//components
import Login from "../login/Login";
import Signup from "../signup/Signup";

const LandingPage = () => {
  const { flexContainer, container, gif } = styles;

  const [registeredUser, setRegisteredUser] = useState(false);
  return (
    <div className={flexContainer}>
      <div className={container}>
        <div className={gif}></div>
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
