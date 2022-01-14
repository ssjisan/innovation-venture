import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function DrawerForMobileMenu({ open, toggleDrawerHandler }) {
  const sideList = () => (
    <Box onClick={toggleDrawerHandler} onKeyDown={toggleDrawerHandler}>
      <IconButton>{/* <IoReturnDownBack /> */} Return</IconButton>
      <Divider />
      <List>
        <Link to="/for-developer">
          <ListItem>
            <Typography>For Developer</Typography> &nbsp;&nbsp;
          </ListItem>
        </Link>
        <Link to="/for-company">
          <ListItem>
            <Typography>For Company</Typography>&nbsp;&nbsp;
          </ListItem>
        </Link>
        <Link to="/about-us">
          <ListItem>
            <Typography>About Us</Typography>&nbsp;&nbsp;
          </ListItem>
        </Link>
      </List>
    </Box>
  );
  return (
    <div>
      <Drawer open={open} onClose={toggleDrawerHandler} anchor="right">
        {sideList()}
      </Drawer>
    </div>
  );
}
