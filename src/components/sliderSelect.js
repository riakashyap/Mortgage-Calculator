import React from "react";
import SliderComponent from "./common/sliderComponent";
import { Stack, Typography } from "@mui/material";

const SliderSelect = ({ data, setData }) => {
  const handleHomeValueChange = (e, value) => {
    const defaultDownPayment = Math.round(value * 0.3); // 30%
    const defaultLoanAmount = value - defaultDownPayment; // 70%
    setData({
      ...data,
      homeValue: value,
      downPayment: defaultDownPayment, // Optional: prevent invalid state
      loanAmount: defaultLoanAmount
    });
  };

  const handleDownPaymentChange = (e, value) => {
    setData({
      ...data,
      downPayment: value,
      loanAmount: data.homeValue - value,
    });
  };

  const handleInterestRateChange = (e, value) => {
    setData({
      ...data,
      interestRate: value,
    });
  };

  return (
    <Stack spacing={1} sx={{ ml: "100px" }}>
      {/* HOME VALUE */}
      <Stack spacing={1} alignItems="flex-start" sx={{ width: 400 }}>
        <Typography variant="subtitle2">Home Value</Typography>
        <Typography variant="h5">${data.homeValue}</Typography>
        <SliderComponent
          min={1000}
          max={10000}
          defaultValue={data.homeValue}
          step={100}
          value={data.homeValue}
          onChange={handleHomeValueChange}
        />
        <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
          <Typography variant="caption" color="text.secondary">
            $1000
          </Typography>
          <Typography variant="caption" color="text.secondary">
            $10000
          </Typography>
        </Stack>
      </Stack>

      {/* DOWN PAYMENT */}
      <Stack spacing={1} alignItems="flex-start" sx={{ width: 400 }}>
        <Typography variant="subtitle2">Down Payment</Typography>
        <Typography variant="h5">${data.downPayment}</Typography>
        <SliderComponent
          min={0}
          max={data.homeValue}
          defaultValue={data.downPayment}
          step={100}
          value={data.downPayment}
          onChange={handleDownPaymentChange}
        />
        <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
          <Typography variant="caption" color="text.secondary">
            $0
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${data.homeValue}
          </Typography>
        </Stack>
      </Stack>

      {/* LOAN AMOUNT (readonly) */}
      <Stack spacing={1} alignItems="flex-start" sx={{ width: 400 }}>
        <Typography variant="subtitle2">Loan Amount</Typography>
        <Typography variant="h5">${data.loanAmount}</Typography>
        <SliderComponent
          min={0}
          max={data.homeValue}
          value={data.loanAmount}
          step={100}
          onChange={() => {}} // Read-only
        />
        <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
          <Typography variant="caption" color="text.secondary">
            $0
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ${data.homeValue}
          </Typography>
        </Stack>
      </Stack>

      {/* INTEREST RATE */}
      <Stack spacing={1} alignItems="flex-start" sx={{ width: 400 }}>
        <Typography variant="subtitle2">Interest Rate</Typography>
        <Typography variant="h5">{data.interestRate}%</Typography>
        <SliderComponent
          min={2}
          max={18}
          defaultValue={data.interestRate}
          step={1}
          value={data.interestRate}
          onChange={handleInterestRateChange}
        />
        <Stack direction="row" justifyContent="space-between" sx={{ width: "100%" }}>
          <Typography variant="caption" color="text.secondary">2%</Typography>
          <Typography variant="caption" color="text.secondary">18%</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default SliderSelect;
