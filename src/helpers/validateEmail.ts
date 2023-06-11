  export const validateEmail = (emailInputRef: string | undefined) => {
    const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailValidationRegex.test(emailInputRef || "");
    return isEmailValid;
  };