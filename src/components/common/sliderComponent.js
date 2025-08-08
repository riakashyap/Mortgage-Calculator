import { Slider, Stack } from "@mui/material";
import React from "react";

const sliderComponent = ({ defaultValue, min, max, step,onChange, value}) => {
  return (
    <>
     <Stack spacing={2}>
    <Slider
      sx ={{ width: 400,  }}
      defaultValue={defaultValue}
      min={min}
      max={max}
      aria-label="Default"
      valueLabelDisplay="auto"
      step={10}
      marks
      onChange={onChange}
      value={value}
    /> 
    </Stack>
    </>
  );
};

export default sliderComponent;
