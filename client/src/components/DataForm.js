import { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
  Badge,
} from "@mui/material";
import SecretItems from "./SecretItems";
const DataForm = () => {
  const [secret, setSecret] = useState("");
  const [seconds, setSeconds] = useState("");
  const [secretList, setSecretList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/v1/secret", {
        secretText: secret,
        expiresAfter: seconds,
      })
      .then((res) => {
        setSecretList([...secretList, res.data]);
        setSecret("");
        setSeconds("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios.get("/v1/secret").then((res) => {
      setSecretList(res.data);
    });
  }, []);

  return (
    <Paper>
      <Box component="form" autoComplete="off" p={3} onSubmit={handleSubmit}>
        <Typography variant="h6" mb={2}>
          Secret
        </Typography>
        <Divider />
        <Box display="flex" gap={23}>
          <Typography variant="subtitle2" mb={2}>
            Name
          </Typography>
          <Typography variant="subtitle2" mb={2}>
            Description
          </Typography>
        </Box>
        <Divider />
        <Box display="flex" gap={20}>
          <Box sx={{ position: "relative" }}>
            <Badge
              sx={{ color: "red", left: "75px", bottom: "-15px" }}
              badgeContent={"*required"}
            />
            <Typography variant="subtitle1">Secret</Typography>
            <Typography variant="body2" mt={2}>
              String
            </Typography>
            <Typography variant="body2" mt={2} sx={{ fontStyle: "italic" }}>
              (formData)
            </Typography>
          </Box>
          <Box mb={2} py={2}>
            <Typography variant="body2" mt={2}>
              This text will be saved as a secret
            </Typography>
            <Box mt={5}>
              <TextField
                id="outlined-error"
                label="secret"
                required={true}
                placeholder="secret"
                size="small"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Box display="flex" gap={20}>
          <Box sx={{ position: "relative" }}>
            <Badge
              sx={{ color: "red", left: "110px", bottom: "-15px" }}
              badgeContent={"*required"}
            />
            <Typography variant="subtitle1">expireAfter</Typography>
            <Typography variant="body2" mt={2}>
              Integer
            </Typography>
            <Typography variant="body2" mt={2} sx={{ fontStyle: "italic" }}>
              (formData)
            </Typography>
          </Box>
          <Box py={2}>
            <Typography variant="body2" mt={2}>
              The secret won't be available after the given time. The value is
              provided in seconds. 0 means never expires
            </Typography>
            <Box mt={5}>
              <TextField
                id="outlined-error"
                label="expiresAfter"
                required={true}
                placeholder="Example: 3600"
                size="small"
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              />
            </Box>
          </Box>
        </Box>
        <Button variant="contained" fullWidth={true} type="submit">
          Submit
        </Button>
      </Box>
      <Divider />
      <SecretItems secrets={secretList} setSecretList={setSecretList} />
    </Paper>
  );
};

export default DataForm;
