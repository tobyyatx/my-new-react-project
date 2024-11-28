// src/components/ProfilePage.js

import React from "react";
import { Box, Typography } from "@mui/material";

const ProfilePage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Your Profile</Typography>
      <Typography variant="h6">Username: John Doe</Typography>
      <Typography variant="h6">Email: john.doe@example.com</Typography>
      <Typography variant="h6">Major: Computer Science</Typography>
    </Box>
  );
};

export default ProfilePage;
