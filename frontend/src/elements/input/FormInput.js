import { useRef } from "react";

//styles
import styles from "./FormInput.module.css";

const FormInput = ({ name, type, placeholder, handleChange }) => {
  const { container, input, _placeholder, focus } = styles;
  const inputRef = useRef();
  const hasText = !!inputRef.current?.value;

  return (
    <div className={container}>
      <input
        ref={inputRef}
        name={name}
        type={type}
        onChange={handleChange}
        className={`${input} ${hasText && focus}`}
      />
      <span className={`${_placeholder} ${hasText && focus}`}>
        {placeholder}
      </span>
    </div>
  );
};

export default FormInput;
