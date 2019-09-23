const validateEmail = value => {
  const pattern = /\S+@\S+\.\S+/;
  const target = "email";

  const errors = [];

  if (!value) {
    errors.push({ target, message: "Email cannot be empty" });
  } else if (!pattern.test(value)) {
    errors.push({ target, message: "Email is invalid" });
  }

  return {
    isValid: !errors.length,
    errors
  };
};

const validatePassword = value => {
  const target = "password";
  const errors = [];

  if (!value) {
    errors.push({ target, message: "Password cannot be empty" });
  } else if (value.length < 8) {
    errors.push({ target, message: "Password length should be >= 8" });
  }

  return {
    isValid: !errors.length,
    errors
  };
};

export { validateEmail, validatePassword };
