import { useState } from "react";
import { useDispatch } from "react-redux";

//actions
import { login } from "../../actions/sessionActions";

//styles
import styles from "./Login.module.css";

import FormInput from "../../elements/input/FormInput";

const Login = ({ setRegisteredUser }) => {
  const { container, form, flex, header } = styles;

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <div className={container}>
      <form
        className={`${form} ${flex}`}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login(userData));
        }}
      >
        <div className={flex}>
          <h1 className={header}>Sign in</h1>
          <FormInput
            name="email"
            type="text"
            placeholder="Email"
            handleChange={handleChange}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Password"
            handleChange={handleChange}
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
