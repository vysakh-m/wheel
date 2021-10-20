import * as yup from "yup";

export const NOTES_DATA = [
  {
    id: 1,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: ["Getting Started"],
    action: "Created",
    time: "2 hours ago",
    img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },
  {
    id: 2,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: ["Getting Started"],
    action: "Drafted",
    time: "2 hours ago",
    img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  },
  {
    id: 3,
    title: "How to claim the warranty?",
    description:
      '"Are you getting my texts???" she texted to him. He glanced at it and chuckled under his breath. Of course he was getting them, but if he wasn\'t getting',
    tags: ["Getting Started"],
    action: "Drafted",
    time: "2 hours ago",
    img: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  }
];

export const ASSIGNED_CONTACT_OPTIONS = [
  {
    label: "Value One",
    value: "value1"
  },
  {
    label: "Value Two",
    value: "value2"
  },
  {
    label: "Value Three",
    value: "value3"
  },
  {
    label: "Value Four",
    value: "value4"
  }
];

export const TAGS_OPTIONS = [
  {
    label: "Getting Started",
    value: "task1"
  },
  {
    label: "Onboarding",
    value: "task2"
  },
  {
    label: "User Flow",
    value: "task3"
  },
  {
    label: "UX",
    value: "task4"
  },
  {
    label: "Bugs",
    value: "task5"
  },
  {
    label: "V2",
    value: "task6"
  }
];

export const NOTE_INITIAL_VALUES = {
  title: "",
  description: "",
  contact: "",
  tags: []
};

export const NOTE_VALIDATION_SCHEMA = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  contact: yup.object().required("Assigned contact is required"),
  tags: yup
    .array()
    .min(1, "Tags must have atleast 1 entry")
    .required("Tags is required")
});
