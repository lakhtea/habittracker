import styles from "./Login.module.css";

const Login = ({ setRegisteredUser }) => {
  return (
    <div className={styles.container}>
      <form className={`${styles.form} ${styles.flex}`} action="">
        <div className={styles.flex}>
          <h1 className={styles.header}>Sign in</h1>
          <input
            className={styles.input}
            type="text"
            placeholder="username/email/phone number"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="password"
          />
          <button type="submit">Sign in!</button>
        </div>

        <span
          onClick={() => {
            setRegisteredUser(false);
          }}
        >
          New to Habit Tracker? Create an account today!
        </span>
      </form>
    </div>
  );
};

export default Login;
