import { useState } from "react";
import useGetExchangeRates from "./useGetExchangeRates";
import "./styles.css";

const taxBracketsNL = [
  [69399, 37.07],
  [Infinity, 49.5],
];
const taxBracketsNZ = [
  [14000, 10.5],
  [48000, 17.5],
  [70000, 30],
  [180000, 33],
  [Infinity, 39],
];
const taxBracketsSG = [
  [20000, 0],
  [30000, 2],
  [40000, 3.5],
  [80000, 7],
  [120000, 11.5],
  [160000, 15],
  [200000, 18],
  [240000, 19],
  [280000, 19.5],
  [320000, 20],
  [500000, 22],
  [1000000, 23],
  [Infinity, 24],
];

function convertCurrency({ ratesObject, amount, fromCode, toCode }) {
  if (fromCode === toCode) return amount;

  const relativeExchange =
    Number(ratesObject[toCode]) / Number(ratesObject[fromCode]);

  return amount * relativeExchange;
}

function calculateTax(income, brackets) {
  const tax = brackets.reduce((acc, cur, idx) => {
    if (income <= cur[0]) {
      // If it's less than the last bracket do nothing
      if (income <= (brackets[idx - 1] ? brackets[idx - 1][0] : 0)) {
        return acc;
      }
      // Add the tax on the difference
      return (
        acc +
        ((income - (brackets[idx - 1] ? brackets[idx - 1][0] : 0)) * cur[1]) /
          100
      );
    } else if (income > cur[0]) {
      // Add the whole bracket worth of tax to accumulator
      return (
        acc +
        ((cur[0] - (brackets[idx - 1] ? brackets[idx - 1][0] : 0)) * cur[1]) /
          100
      );
    }
    // Default
    else return acc;
  }, 0);

  return {
    tax: tax,
    effectiveRate: income > 0 ? (tax / income) * 100 : 0,
  };
}

const countriesMap = {
  NL: {
    currency: "EUR",
    brackets: taxBracketsNL,
    countryTitle: "Netherlands",
  },
  NZ: {
    currency: "NZD",
    brackets: taxBracketsNZ,
    countryTitle: "New Zealand",
  },
  SG: {
    currency: "SGD",
    brackets: taxBracketsSG,
    countryTitle: "Singapore",
  },
};

function TaxCalculator() {
  const [country, setCountry] = useState("SG");
  const [income, setIncome] = useState(100000);
  const [taxToPay, setTaxToPay] = useState(
    calculateTax(income, countriesMap[country].brackets)
  );
  const latestEuroRates = useGetExchangeRates();

  function handleIncomeChange(e) {
    const incomeValue = Number(e.target.value);
    setIncome(incomeValue);
    setTaxToPay(calculateTax(incomeValue, countriesMap[country].brackets));
  }
  function handleCountryChange(e) {
    setCountry(e.target.name);
    setTaxToPay(calculateTax(income, countriesMap[e.target.name].brackets));
  }

  const inTheHand = income - taxToPay.tax;

  return (
    <div className="tax-calculator">
      <h3>Tax Calculator</h3>
      {Object.entries(countriesMap).map((countriesItem) => (
        <button
          key={countriesItem[0]}
          name={countriesItem[0]}
          onClick={handleCountryChange}
          className={`countries-button ${
            countriesItem[0] === country ? "selected" : ""
          }`}
        >
          {countriesItem[1].countryTitle}
        </button>
      ))}
      <h4>Currency: {countriesMap[country].currency}</h4>
      <input
        type="number"
        name="income"
        id="income"
        onChange={handleIncomeChange}
        value={income}
      />

      <h4>Tax Brackets</h4>

      <table className="tax-calculator-table">
        <thead className="tax-calculator-table-head">
          <tr>
            <th>Up to</th>
            <th>Rate %</th>
          </tr>
        </thead>
        <tbody>
          {countriesMap[country].brackets.map((bracket, idx) => (
            <tr key={idx}>
              <td>{bracket[0].toLocaleString()}</td>
              <td>{bracket[1].toFixed(1)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>Tax Details</h4>

      <h5>Tax to pay</h5>
      <div className="flex-row">
        <div className="spaced-box">
          <p>
            {taxToPay.tax.toLocaleString()} {countriesMap[country].currency}
          </p>
        </div>
        <div className="spaced-box">
          <p>{taxToPay.effectiveRate.toPrecision(4)}% Effective Rate</p>
        </div>
      </div>
      <h5>In the hand</h5>
      <div className="flex-row">
        <div className="spaced-box">
          <p>
            {latestEuroRates &&
              convertCurrency({
                ratesObject: latestEuroRates.data.rates,
                amount: inTheHand,
                fromCode: countriesMap[country].currency,
                toCode: "EUR",
              }).toLocaleString()}{" "}
            EUR
          </p>
        </div>
        <div className="spaced-box">
          <p>
            {latestEuroRates &&
              convertCurrency({
                ratesObject: latestEuroRates.data.rates,
                amount: inTheHand,
                fromCode: countriesMap[country].currency,
                toCode: "SGD",
              }).toLocaleString()}{" "}
            SGD
          </p>
        </div>
        <div className="spaced-box">
          <p>
            {latestEuroRates &&
              convertCurrency({
                ratesObject: latestEuroRates.data.rates,
                amount: inTheHand,
                fromCode: countriesMap[country].currency,
                toCode: "NZD",
              }).toLocaleString()}{" "}
            NZD
          </p>
        </div>
      </div>
    </div>
  );
}

export default TaxCalculator;
