import * as yup from "yup";

export const CONTACT_DATA = [
  {
    id: 1,
    firstName: "Ronald",
    lastName: "Richards",
    role: "Owner",
    email: "albert@borer.com",
    img: ""
  },
  {
    id: 2,
    firstName: "Jacob",
    lastName: "Jones",
    role: "Owner",
    email: "albert@borer.com",
    img: "https://randomuser.me/api/portraits/women/63.jpg"
  },
  {
    id: 3,
    firstName: "Ronald",
    lastName: "Richards",
    role: "Owner",
    email: "albert@borer.com",
    img: ""
  },
  {
    id: 4,
    firstName: "Jacob",
    lastName: "Jones",
    role: "Owner",
    email: "albert@borer.com",
    img: "https://randomuser.me/api/portraits/women/63.jpg"
  }
];

export const ROLE_OPTIONS = [
  {
    label: "Owner",
    value: "role1"
  },
  {
    label: "Tech Lead",
    value: "role2"
  },
  {
    label: "Director",
    value: "role3"
  }
];

export const CONTACTS_INITIAL_VALUE = {
  firstName: "",
  lastName: "",
  email: "",
  role: ""
};
export const CONTACTS_VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Invalid Email")
    .required("Email Address is required"),
  role: yup.object().required("Role is required")
});
