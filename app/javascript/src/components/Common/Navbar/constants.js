import React from "react";

import { Home, Settings, UserCircle } from "@bigbinary/neeto-icons";

export const NAV_LINKS = [
  {
    icon: () => {
      return <Home />;
    },
    label: "Notes",
    to: "/notes"
  },
  {
    icon: () => {
      return <UserCircle />;
    },
    label: "Contacts",
    to: "/contacts"
  },
  {
    icon: () => {
      return <Settings />;
    },
    label: "Settings",
    to: "/settings"
  }
];
