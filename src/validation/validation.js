// import * as yup from "yup";

// export const signUpSchema = yup.object().shape({
//   username: yup.string().required("Username should not be empty!"),
//   email: yup.string().email("Please enter a valid email").required("Email shall not be empty"),
//   password: yup.string().min(8, "Password should be at least 8 characters").max(50, "Password shouldn't be longer than 50"),
//   cpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
//   iAgree: yup.bool().oneOf([true], "You must agree to the terms and conditions"),
// });

import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  username: yup.string().required("Username shall not be empty"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email shall not be empty"),
  password: yup
    .string()
    .min(8, "Password shall be at least 8 characters long")
    .max(50, "Password shall not be longer than 50 characters"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords shall match each other"),
  iAgree: yup
    .bool()
    .oneOf([true], "You must agree to the terms and conditions"),
});

export const signInSchema = yup.object().shape({
  username: yup.string().required("Username shall not be empty"),
  password: yup.string().required("Password shall not be empty"),
});