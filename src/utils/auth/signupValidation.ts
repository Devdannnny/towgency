import * as yup from "yup";

export const signUpSchema = yup
  .object({
    cname: yup.string().required("Company name is required"),
    pnumber: yup.string().required("Phone number is required"),
    email: yup.string().required("Email address is required"),
    region: yup.string().required("Region is required"),
    city: yup.string().required("City is required"),
  })
  .required();
