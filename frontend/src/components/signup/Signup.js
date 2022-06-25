import styles from "./Signup.module.css";

const Signup = ({ setRegisteredUser }) => {
  return (
    <div className={styles.container}>
      <form className={`${styles.form} ${styles.flex}`} action="">
        <div className={styles.flex}>
          <h1 className={styles.header}>Sign up</h1>
          <input
            className={styles.input}
            type="text"
            placeholder="Username/Email/Phone Number"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Create a password"
          />
          <input
            className={styles.input}
            type="password"
            placeholder="Confirm your password"
          />
          <button type="submit">Sign up!</button>
        </div>
        <span
          onClick={() => {
            setRegisteredUser(true);
          }}
        >
          Have an account? Login instead
        </span>
      </form>
    </div>
  );
};

export default Signup;
