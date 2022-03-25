import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Divider,
  Badge,
} from "@mui/material";
import SecretItem from "./SecretItem";
const Form = () => {
  return (
    <Paper>
      <Box component="form" autoComplete="off" p={3}>
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
                error
                id="outlined-error"
                label="Error"
                required={true}
                placeholder="Hello World"
                size="small"
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
                error
                id="outlined-error"
                label="Error"
                required={true}
                placeholder="Hello World"
                size="small"
              />
            </Box>
          </Box>
        </Box>
        <Button variant="contained" fullWidth="true" type="submit">
          Submit
        </Button>
      </Box>
      <SecretItem />
    </Paper>
  );
};

export default Form;
