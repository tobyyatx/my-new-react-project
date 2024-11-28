// src/components/NewAccountPage.js

import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const NewAccountPage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">Create New Account</Typography>
      <form>
        <TextField label="Username" variant="outlined" fullWidth margin="normal" />
        <TextField label="Email" variant="outlined" fullWidth margin="normal" />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
        />
        <Button variant="contained" color="primary" fullWidth>
          Create Account
        </Button>
      </form>
    </Box>
  );
};

export default NewAccountPage;
