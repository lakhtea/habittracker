import styles from "./LandingPage.module.css";

import Login from "../login/Login";

const LandingPage = () => {
  return (
    <div className={styles.flexContainer}>
      <div class={styles.container}>
        <div class={styles.gif}></div>
      </div>
      <Login />
    </div>
  );
};

export default LandingPage;
