import * as React from "react";
const ConvertTemp = React.lazy(() => import("../ConvertTemp"));
const FlexFills = React.lazy(() => import("../FlexFills"));
const TaxCalculator = React.lazy(() =>
  import("../TaxCalculator/TaxCalculator")
);
const Anagrams = React.lazy(() => import("../Anagrams/Anagrams"));
const Make24 = React.lazy(() => import("../Make24/Make24"));
const Logos = React.lazy(() => import("../Logos/Logos"));

const routesMap = [
  {
    path: "anagrams",
    element: Anagrams,
    title: "Anagrams",
  },
  {
    path: "make24",
    element: Make24,
    title: "Make 24",
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
  {
    path: "logos",
    element: Logos,
    title: "Logos",
  },
];

export default routesMap;
