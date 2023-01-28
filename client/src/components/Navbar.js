import React, {  } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function ButtonAppBar() {
  const navigate = useNavigate();
  // const [myToken, setMyToken] = useState(false);

  // const token = localStorage.getItem("token");

  // if (token) {
  //   setMyToken(true);
  // }

  async function removeToken() {
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className="white">
              Mern Auth
            </Link>
          </Typography>
          <Button color="inherit" onClick={removeToken}>
            Logout
          </Button>
          <Link to="/login" className="white">
            <Button color="inherit">Login</Button>
          </Link>
          <Link to="/register" className="white">
            <Button color="inherit">Register</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
