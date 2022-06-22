import { Link } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav
      className={`${styles.vars} ${styles.container} ${styles.flexContainer}`}
    >
      <Link to={"/"} className={styles.header}>
        Habit Tracker
      </Link>
      <div className={styles.flexContainer}>
        <Link to={"/"} className={styles.item}>
          My Journal
        </Link>
        <Link to={"/habits"} className={styles.item}>
          Habits
        </Link>
        <Link to={"/systems"} className={styles.item}>
          Systems
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
