// function for Strong Password.

// .length to check length,
// .includes to find if the string includes the parameter or not,
// /[A-Z]/.test("") checks the String has atleast one capital then returns true otherwise false.
let isStrongPassword = function (password) {
  return (
    password.length >= 8 &&
    !password.includes("password") &&
    /[A-Z]/.test(password)
  );
};
