import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Avatar, Tag } from "neetoui/v2";

function NotesFooter({ action, tags, time, img }) {
  return (
    <div className="mt-3.5 flex justify-between">
      <div className="flex ">
        {tags.map((item, index) => (
          <Tag
            key={index}
            color="grey"
            className="text-gray-500	bg-gray-50 mr-1"
            label={item}
          />
        ))}
      </div>

      <div className="flex flex-column items-center">
        <Clock size={16} />
        <Typography className="text-gray-500 mx-1" style="body2">
          {action ? action : "Created"} {time ? time : "2 hours ago"}
        </Typography>
        <Avatar
          size="small"
          user={{
            imageUrl: img
              ? img
              : "https://randomuser.me/api/portraits/thumb/men/75.jpg"
          }}
        />
      </div>
    </div>
  );
}

export default NotesFooter;
