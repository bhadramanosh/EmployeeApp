import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleAddClick = () => {
    navigate("/add");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          EmployeeApp
        </Typography>
        <IconButton color="inherit" onClick={handleHomeClick}>
          <HomeIcon />
        </IconButton>
        <IconButton color="inherit" onClick={handleAddClick}>
          <AddIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;




