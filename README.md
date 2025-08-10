# 🏠 Mortgage Calculator

A responsive React-based **Mortgage Calculator** built with **Material UI**, **Chart.js**, and **custom sliders** to help visualize monthly payments and the breakdown between principal and interest.

## ✨ Features

- **Home Value Slider** – Adjust the purchase price of the home.
- **Down Payment Slider** – Adjust your upfront payment; loan amount updates automatically.
- **Loan Amount Display** – Automatically calculated from home value and down payment.
- **Interest Rate Slider** – Fine-grained control with smooth 1% increments.
- **Loan Tenure Selector** – Choose from common loan terms (5–25 years).
- **Monthly Payment Calculation** – Uses standard mortgage amortization formula.
- **Pie Chart Breakdown** – Visualizes principal vs. total interest over the loan’s lifetime.
- **Responsive Layout** – Optimized for desktops and tablets.

## 🖼 Preview

<img width="1352" height="916" alt="mortgage" src="https://github.com/user-attachments/assets/957cc128-4c5f-4206-9735-5eda252d4d71" />


---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/riakashyap/Mortgage-Calculator.git

# Navigate into the project
cd Mortgage-Calculator

# Install dependencies
npm install

# Start development server
npm start
```

## 📦 Dependencies
* React – UI library
* Material UI (MUI) – Components & styling
* Chart.js – Data visualization
* react-chartjs-2 – React wrapper for Chart.js

## To install Chart.js & wrapper:
```bash
npm install chart.js react-chartjs-2
```


## ⚙ Usage
* Home Value Slider – Set the value of the home.
* Down Payment Slider – Choose your upfront payment.
* Loan Amount – Automatically recalculates (Home Value - Down Payment).
* Interest Rate Slider – Adjust to desired interest rate (2–18%).
* Tenure Selector – Choose loan duration in years.
* Results – View monthly payment and breakdown chart.


## 📐 Calculation Formula
M = P × [ r(1 + r)^n ] / [ (1 + r)^n – 1 ]

Where:
* M = monthly payment
* P = loan amount
* r = monthly interest rate (annualRate / 12)
* n = total number of monthly payments (years × 12)


## 📊 Example
For a $3000 home, $9000 down payment, 15-year loan, at 12% interest:
* Loan Amount: $2100
* Monthly Payment: $25.21
* Total Interest Paid: $2,437.80
* Chart shows ratio of principal to interest.


## 🛠 Development Notes
* The loan amount can never exceed the home value minus the down payment.
* All sliders are built with MUI's Slider component wrapped in SliderComponent.
* Pie chart styling uses chart.js defaults but can be customized in Result.js.
* Layout uses MUI’s Grid and Stack for spacing.

