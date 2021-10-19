import React from "react";

import { Clock } from "@bigbinary/neeto-icons";
import { Typography, Avatar, Tag } from "neetoui/v2";

function NotesFooter({ action, tag, time, img }) {
  return (
    <div className="mt-3 flex flex-column justify-between">
      <Tag color="grey" className="text-gray-500	bg-gray-50" label={tag} />
      <div className="flex flex-column items-center">
        <Clock size={16} />
        <Typography className="text-gray-500 mx-1" style="body2">
          {action} {time}
        </Typography>
        <Avatar
          size="small"
          user={{
            imageUrl: img
          }}
        />
      </div>
    </div>
  );
}

export default NotesFooter;
