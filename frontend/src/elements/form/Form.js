//styles
import styles from "./Form.module.css";

//elements
import Button from "../button/Button";

const Form = ({ children, handleSubmit, buttonText }) => {
  const { form } = styles;

  return (
    <form onSubmit={handleSubmit} className={form}>
      {children}
      <Button type="submit" value={buttonText} />
    </form>
  );
};

export default Form;
