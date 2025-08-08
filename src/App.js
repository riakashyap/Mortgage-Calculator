import Navbar from "./components/navbar";
import SliderSelect from "./components/sliderSelect";
import TenureSelect from "./components/tenureSelect";
import Result from "./components/result";
import { Container } from "@mui/material";
import { Grid } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" style={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect />
            <TenureSelect />
          </Grid>
          <Grid item md={6}>
            <Result />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
