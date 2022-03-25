import { Box, Typography, Badge } from "@mui/material";
import React from "react";

const Head = () => {
  return (
    <Box p={2}>
      <Badge color="info" badgeContent={"1.0.0"}>
        <Typography variant="h3">Secret server</Typography>
      </Badge>
      <Typography variant="body2" mb={2}>
        [ Base URL: api.your-secret-server.com/v1 ]
      </Typography>
      <Typography variant="subtitle1">
        This is an API of a secret service. You can save your secret by using
        the API. You can restrict the access of a secret after a certen period of time.
      </Typography>
    </Box>
  );
};

export default Head;
