import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
const ImagesGroup = () => {
  return (
    <AvatarGroup
      max={4}
      sx={{
        "& .MuiAvatar-root": { width: 20, height: 20, fontSize: 12 },
      }}
    >
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
      <Avatar alt="Remy Sharp" src="/logo192.png" />
    </AvatarGroup>
  );
};

export default ImagesGroup;
