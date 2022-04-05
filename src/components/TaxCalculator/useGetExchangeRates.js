import { useEffect, useState } from "react";

const dayMils = 86_400_000;

function useGetExchangeRates() {
  const [latestRatesEuro, setLatestRatesEuro] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        /**
         * Check rates in state
         */
        if (latestRatesEuro) {
          const rateTimestamp = new Date(latestRatesEuro.timeStamp).valueOf();
          if (Date.now() - rateTimestamp < dayMils) {
            // Rates in state are up-to-date
            return;
          }
        }

        /**
         * Check rates in localStorage
         */
        const lsEuroRates = localStorage.getItem("euroRates");

        if (lsEuroRates) {
          const lsEuroRatesJson = JSON.parse(lsEuroRates);
          const lsTimestamp = new Date(lsEuroRatesJson.timeStamp).valueOf();
          if (lsTimestamp && Date.now() - lsTimestamp < dayMils) {
            // Rates in localStorage are ok - setting to state
            setLatestRatesEuro(lsEuroRatesJson);
            return;
          }
        }

        /**
         * Fetch rates and set to state and localStorage
         */

        const response = await fetch(
          "https://api.exchangerate-api.com/v4/latest/EUR"
        );
        const json = await response.json();
        const euroRates = {
          data: json,
          timeStamp: new Date().toISOString(),
          error: null,
        };

        localStorage.setItem("euroRates", JSON.stringify(euroRates));
        setLatestRatesEuro(euroRates);
        return;
      } catch (error) {
        /**
         * Handle error in getting rates
         */
        setLatestRatesEuro({
          data: null,
          timeStamp: new Date().toISOString(),
          error: error,
        });
      }
    })();
  });
  return latestRatesEuro;
}

export default useGetExchangeRates;
