import { useState } from "react";
import { useDispatch } from "react-redux";

//styles
// import styles from "./Signup.module.css";

//actions
import { signup } from "../../actions/sessionActions";

//elements
import Form from "../../elements/form/Form";
import FormInput from "../../elements/input/FormInput";

const Signup = ({ setRegisteredUser }) => {
  // const {} = styles;

  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(userData));
  };

  return (
    <Form handleSubmit={handleSubmit} buttonText="Sign up!">
      <FormInput
        name="email"
        type="text"
        placeholder="Enter your email address"
        handleChange={handleChange}
      />
      <FormInput
        name="username"
        type="text"
        placeholder="Create a username"
        handleChange={handleChange}
      />
      <FormInput
        name="password"
        type="password"
        placeholder="Create a password"
        handleChange={handleChange}
      />
      <FormInput
        name="confirmPassword"
        type="password"
        placeholder="Confirm your password"
        handleChange={handleChange}
      />
    </Form>
    // <span onClick={() => setRegisteredUser(true)}>
    //   Have an account? Login instead
    // </span>
  );
};

export default Signup;
