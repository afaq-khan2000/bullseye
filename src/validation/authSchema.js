const { object, string, ref, boolean } = require("yup");
const { Roles } = require("../enums");

// Sign Up Parameters Validation
const signupSchema = object().shape({
  body: object().shape({
    username: string().required("Username is Required"),
    email: string().email("Email is not Valid!").required("Email is Required"),
    password: string()
      .required("Password is Required")
      .matches(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must contain at least 6 characters, one uppercase, one number and one special case character"),
    role: string().oneOf([Roles.ADMIN, Roles.ADVISOR, Roles.INVESTOR]).required("Role is Required"),
  }),
});
// login Parameters Validation
const loginSchema = object().shape({
  body: object().shape({
    email: string().email("Email is not Valid!").required("Email is Required"),
    password: string().required("password is Required"),
  }),
});

module.exports = {
  signupSchema,
  loginSchema,
};
