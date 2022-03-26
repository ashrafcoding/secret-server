import { Container } from "@mui/material";
import DataForm from "./components/DataForm";
import Head from "./components/Head";

function App() {
  return (
    <Container width="80vw" m="auto" p="20px">
      <Head />
      <DataForm />
    </Container>
  );
}

export default App;
