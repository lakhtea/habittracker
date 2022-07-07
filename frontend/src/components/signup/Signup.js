import { useState } from "react";
import { useDispatch } from "react-redux";

//styles
import styles from "./Signup.module.css";

//actions
import { signup } from "../../actions/sessionActions";

//elements
import FormInput from "../../elements/input/FormInput";

const Signup = ({ setRegisteredUser }) => {
  const { container, form, flex, header } = styles;

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
          <FormInput
            name="email"
            type="text"
            placeholder="Enter your email address"
            handleChange={handleChange}
            hasText={userData.email.length}
          />
          <FormInput
            name="username"
            type="text"
            placeholder="Create a username"
            handleChange={handleChange}
            hasText={userData.username.length}
          />
          <FormInput
            name="password"
            type="password"
            placeholder="Create a password"
            handleChange={handleChange}
            hasText={userData.password.length}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            handleChange={handleChange}
            hasText={userData.confirmPassword.length}
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
