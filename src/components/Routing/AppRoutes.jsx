import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import NoMatch from "../NoMatch/NoMatch";
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
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <route.element />
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  );
}
