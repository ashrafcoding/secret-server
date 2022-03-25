import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React from "react";

const SecretItem = () => {
  return (
    <Box p={1}>
      <List>
        <ListItem>
          <ListItemButton component="a" href="#simple-list">
            <ListItemText primary="Secret" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default SecretItem;
