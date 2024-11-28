// src/components/MessagePage.js

import React from "react";
import { Box, Button, Typography, IconButton, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const MessageCard = ({ title, description, onClose }) => (
  <Paper
    elevation={3}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 1,
      p: 2,
      mb: 2,
      position: "relative",
      borderRadius: 2,
    }}
  >
    <Typography variant="h6">{title}</Typography>
    <Typography variant="body2">{description}</Typography>
    <Button
      variant="contained"
      color="primary"
      sx={{ alignSelf: "flex-start" }}
    >
      Respond
    </Button>
    <IconButton
      onClick={onClose}
      sx={{
        position: "absolute",
        top: 8,
        right: 8,
      }}
    >
      <CloseIcon />
    </IconButton>
  </Paper>
);

const MessagePage = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>
        Messages
      </Typography>
      <MessageCard
        title="CS3234 Study Group Invitation"
        description="Meets every Wednesday at 3:30 PM"
        onClose={() => console.log("Close CS3234 Study Group Invitation")}
      />
      <MessageCard
        title="Chad has sent you a message request"
        description="Hey, I see that you are in CS3543 with me. Message me we should study sometime."
        onClose={() => console.log("Close Chad message request")}
      />
      <MessageCard
        title="ECE Group Chat Invitation"
        description="43 Users, Last Message 13 Minutes Ago"
        onClose={() => console.log("Close ECE Group Chat Invitation")}
      />
    </Box>
  );
};

export default MessagePage;
