import { Link } from "react-router-dom";
import { logout } from "../../actions/sessionActions";
import { useDispatch } from "react-redux";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const { flexContainer, container, header, item } = styles;

  const dispatch = useDispatch();
  return (
    <nav className={`${container} ${flexContainer}`}>
      <Link to={"/"} className={header}>
        Habit Tracker
      </Link>
      <div className={flexContainer}>
        <Link to={"/"} className={item}>
          My Journal
        </Link>
        <Link to={"/habits"} className={item}>
          Habits
        </Link>
        <Link to={"/systems"} className={item}>
          Systems
        </Link>
        <button onClick={() => dispatch(logout())}>logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
