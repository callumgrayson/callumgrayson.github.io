import Dashboard from "../Dashboard/Dashboard";
import NoMatch from "../NoMatch/NoMatch";
import About from "../About/About";

const routesMap = [
  {
    path: "about",
    element: About,
  },
  {
    path: "dashboard",
    element: Dashboard,
  },
  {
    path: "*",
    element: NoMatch,
  },
];

export default routesMap;
