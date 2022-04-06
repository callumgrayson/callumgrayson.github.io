import * as React from "react";
// import FlexFills from "../FlexFills";
// import TaxCalculator from "../TaxCalculator/TaxCalculator";
const ConvertTemp = React.lazy(() => import("../ConvertTemp"));
const FlexFills = React.lazy(() => import("../FlexFills"));
const TaxCalculator = React.lazy(() =>
  import("../TaxCalculator/TaxCalculator")
);
const Anagrams = React.lazy(() => import("../Anagrams/Anagrams"));

const routesMap = [
  {
    path: "anagrams",
    element: Anagrams,
    title: "Anagrams",
  },
  {
    path: "flex-fills",
    element: FlexFills,
    title: "Flex Fills",
  },
  {
    path: "tax-calculator",
    element: TaxCalculator,
    title: "Tax Calculator",
  },
  {
    path: "convert-temperature",
    element: ConvertTemp,
    title: "Convert Temperature",
  },
];

export default routesMap;
