import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import MessagePage from "./components/MessagePage";
import NewAccountPage from "./components/NewAccountPage";
import ProfilePage from "./components/ProfilePage";

const App = () => {
  return (
    <Router>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Study Group Finder
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/new-account">
            New Account
          </Button>
          <Button color="inherit" component={Link} to="/profile">
            Profile
          </Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/" element={<MessagePage />} />
        <Route path="/new-account" element={<NewAccountPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;

