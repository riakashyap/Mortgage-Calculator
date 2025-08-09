import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <div style={{ marginLeft: "70px" }}>
          <Typography variant="h4">The Great Bank</Typography>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;