import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form} action="">
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
      </form>
    </div>
  );
};

export default Login;
