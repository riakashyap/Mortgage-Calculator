import React from "react";
import SliderComponent from "./common/sliderComponent";
import { Stack, Typography } from "@mui/material";

const sliders = [
  {
    label: "Home Value",
    value: "$3000",
    min: 0,
    max: 250,
    defaultValue: 20,
  },
  {
    label: "Down Payment",
    value: "$1000",
    min: 0,
    max: 150,
    defaultValue: 20,
  },
  {
    label: "Loan Amount",
    value: "$2000",
    min: 0,
    max: 1250,
    defaultValue: 40,
  },
];

const SliderSelect = () => {
  return (
    <Stack spacing={4} sx={{ ml: '100px' }}>
      {sliders.map((slider, index) => (
        <Stack key={index} spacing={1} alignItems="flex-start" sx={{ width: 400 }}>
          <Typography variant="subtitle2">{slider.label}</Typography>
          <Typography variant="h5">{slider.value}</Typography>
          <SliderComponent
            min={slider.min}
            max={slider.max}
            defaultValue={slider.defaultValue}
            step={10}
            onChange={(e, value) => console.log(slider.label, value)}
          />
          <Stack direction="row" justifyContent="space-between" sx={{ width: '100%' }}>
            <Typography variant="caption" color="text.secondary">${slider.min}</Typography>
            <Typography variant="caption" color="text.secondary">${slider.max}</Typography>
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};

export default SliderSelect;
