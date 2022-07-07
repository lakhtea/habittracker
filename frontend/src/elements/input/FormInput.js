import styles from "./FormInput.module.css";

const FormInput = ({ name, type, placeholder, handleChange, hasText }) => {
  const { container, input, _placeholder, focus } = styles;

  return (
    <div className={container}>
      <input
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
