import React from "react";

import { Home, Settings, UserCircle } from "@bigbinary/neeto-icons";
import { Toastr } from "neetoui";
import { Sidebar } from "neetoui/v2/layouts";
import { withRouter } from "react-router-dom";

import authenticationApi from "apis/authentication";
import { resetAuthTokens } from "apis/axios";
import { useAuthDispatch } from "contexts/auth";

const NavBar = () => {
  const authDispatch = useAuthDispatch();
  const handleLogout = async () => {
    try {
      await authenticationApi.logout();
      authDispatch({ type: "LOGOUT" });
      resetAuthTokens();
      window.location.href = "/";
    } catch (error) {
      Toastr.error(error);
    }
  };

  return (
    <div className="flex flex-row items-start justify-start">
      <Sidebar
        isCollapsed
        navLinks={[
          {
            icon: function noRefCheck() {
              return <Home />;
            },
            label: "Notes",
            to: "/notes"
          },
          {
            icon: function noRefCheck() {
              return <UserCircle />;
            },
            label: "Contacts",
            to: "/contacts"
          },
          {
            icon: function noRefCheck() {
              return <Settings />;
            },
            label: "Settings",
            to: "/settings"
          }
        ]}
        profileInfo={{
          dropdownProps: [
            {
              label: "Edit"
            },
            {
              label: "Logout",
              onClick: handleLogout
            }
          ],
          email: "oliversmith@gmail.com",
          imageUrl: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
          name: "Oliver Smith"
        }}
      />
    </div>
  );
};

export default withRouter(NavBar);
