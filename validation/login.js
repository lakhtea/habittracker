const Validator = require("validator");
const validText = require("./validText");

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
