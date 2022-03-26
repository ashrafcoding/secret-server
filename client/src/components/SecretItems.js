import { useState } from "react";
import { Box, ListItem, ListItemText, ListItemButton } from "@mui/material";
import axios from "axios";
import { FixedSizeList } from "react-window";

const SecretItems = ({ secrets, setSecretList }) => {
  const [secretText, setSecretText] = useState("");

  const handleClick = (hash) => {
    axios
      .get(`/v1/secret/${hash}`)
      .then((res) => {
        setSecretText(res.data);
      })
      .catch((err) => {
        console.log(err.message);
        if (err.message === "Request failed with status code 404") {
          setSecretText("Secret not found");
          setSecretList(secrets.filter((secret) => secret !== hash));
        }
      });
  };

  return (
    <Box p={1}>
      {secretText.length > 0 && (
        <ListItem>
          <ListItemText
            primary={secretText}
            sx={{
              textAlign: "center",
              bgcolor: "secondary.light",
              color: "white",
              padding: "20px",
            }}
            primaryTypographyProps={{ fontSize: "30px" }}
          />
        </ListItem>
      )}
      <FixedSizeList
        height={200}
        itemCount={secrets.length}
        itemSize={50}
        width={"100%"}
      >
        {({ index, style }) => (
          <ListItem style={style}>
            <ListItemButton onClick={() => handleClick(secrets[index])}>
              <ListItemText
                primary={secrets[index]}
                sx={{ textAlign: "center" }}
              />
            </ListItemButton>
          </ListItem>
        )}
      </FixedSizeList>
    </Box>
  );
};

export default SecretItems;
