import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import routesMap from "./routesMap";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        {routesMap.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.element />}
          />
        ))}
      </Route>
    </Routes>
  );
}
