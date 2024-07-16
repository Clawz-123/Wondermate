import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  username: yup.string().required("Username should not be empty!"),
  email: yup.string().email("Please enter a valid email").required("Email shall not be empty"),
  password: yup.string().min(8, "Password should be at least 8 characters").max(50, "Password shouldn't be longer than 50"),
  cpassword: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
  iAgree: yup.bool().oneOf([true], "You must agree to the terms and conditions"),
});
