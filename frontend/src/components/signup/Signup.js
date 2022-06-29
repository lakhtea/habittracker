import { useState } from "react";
import { useDispatch } from "react-redux";

//styles
import styles from "./Signup.module.css";

//actions
import { signup } from "../../actions/sessionActions";

const Signup = ({ setRegisteredUser }) => {
  const { container, form, flex, header, input } = styles;

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <div className={container}>
      <form
        className={`${form} ${flex}`}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(signup(userData));
        }}
      >
        <div className={flex}>
          <h1 className={header}>Sign up</h1>
          <input
            name="email"
            className={input}
            type="text"
            placeholder="Enter your email address"
            onChange={handleChange}
          />
          <input
            name="username"
            className={input}
            type="text"
            placeholder="Create a username"
            onChange={handleChange}
          />
          <input
            name="password"
            className={input}
            type="password"
            placeholder="Create a password"
            onChange={handleChange}
          />
          <input
            name="confirmPassword"
            className={input}
            type="password"
            placeholder="Confirm your password"
            onChange={handleChange}
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
