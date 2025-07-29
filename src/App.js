import Navbar from "./components/navbar";
import SliderSelect from "./components/sliderSelect";
import TenureSelect from "./components/tenureSelect";
import Result from "./components/result";
import Common from "./components/common";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SliderSelect />
      <TenureSelect />  
      <Result />
      <Common />
    </div>
  );
}

export default App;
