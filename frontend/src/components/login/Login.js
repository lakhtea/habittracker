import { useState } from "react";
import { useDispatch } from "react-redux";

//actions
import { login } from "../../actions/sessionActions";

//styles
// import styles from "./Login.module.css";

//elements
import Form from "../../elements/form/Form";
import FormInput from "../../elements/input/FormInput";

const Login = ({ setRegisteredUser }) => {
  // const {} = styles;

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(userData));
  };

  return (
    <Form handleSubmit={handleSubmit} buttonText="Log in!">
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

      <span
        onClick={() => {
          setRegisteredUser(false);
        }}
      >
        New to Habit Tracker? Create an account today!
      </span>
    </Form>
  );
};

export default Login;
