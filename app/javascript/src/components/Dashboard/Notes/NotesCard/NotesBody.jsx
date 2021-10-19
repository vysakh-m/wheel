import React from "react";

import { Typography } from "neetoui/v2";

const NotesBody = ({ title, description }) => {
  return (
    <>
      <Typography className="mt-2 " style="h4">
        {title}
      </Typography>
      <Typography className="my-2" style="body2">
        {description}
      </Typography>
    </>
  );
};

export default NotesBody;
