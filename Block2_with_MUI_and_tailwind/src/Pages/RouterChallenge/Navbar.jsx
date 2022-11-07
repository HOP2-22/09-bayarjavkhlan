import * as React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import "../../index.css";
import RouterData from "./RouterData";

const Navbar = ({ title, comment, avatar, name, image, date, key }) => {
  const navItems = ["Production", "Services", "contact", "Log in"];

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "white" }}>
        <Container>
          <Toolbar variant="dense" className="haha">
            <Typography variant="h6" color="gray" component="div">
              Team
            </Typography>
            <Box display="flex">
              <Typography variant="h6" color="gray" component="div">
                <List
                  sx={{
                    display: "flex",
                  }}
                >
                  {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                      <ListItemButton sx={{ textAlign: "center" }}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  hi
                </Button>
              </Typography>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <RouterData />
      <Box>
        <Box></Box>
        <Box></Box>
      </Box>
    </div>
  );
};

export default Navbar;
