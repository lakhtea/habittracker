//styles
import styles from "./Button.module.css";

const Button = ({ type, value }) => {
  const { button } = styles;

  return (
    <button className={button} type={type}>
      {value}
    </button>
  );
};

export default Button;
