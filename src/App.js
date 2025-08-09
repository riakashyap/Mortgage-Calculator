import { useState } from "react";
import Navbar from "./components/navbar";
import SliderSelect from "./components/sliderSelect";
import TenureSelect from "./components/tenureSelect";
import Result from "./components/result";
import { Container } from "@mui/material";
import { Grid } from "@mui/system";

function App() {
  const [data,setData] = useState({
    homeValue: 3000,
    downPayment: 900,
    loanAmount: 2100,
    interestRate: 5,
    loanTerm: 15,
  });
  return(
    <div className="App">
      <Navbar />
      <Container maxWidth="xl" style={{ marginTop: 4 }}>
        <Grid container spacing={5}>
          <Grid item md={6}>
            <SliderSelect data={data} setData={setData} />
             <div style={{ paddingLeft: "100px" }}> 
            <TenureSelect data={data} setData={setData} sx={{ mt: 3 }} />
            </div>
          </Grid>
          <Grid item md={6}>
            <div style={{ marginLeft: "200px", marginTop: "120px"  }}>
            <Result data={data} setData={setData}/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
