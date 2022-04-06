import React from "react";
import { Link } from "react-router-dom";
import routesMap from "../Routing/routesMap";

function Nav({ showMenu, handler }) {
  return (
    <>
      <div
        className={`click-box ${showMenu ? "open" : ""}`}
        onClick={handler}
      />
      <div className={`nav-box ${showMenu ? "open" : ""}`}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {routesMap.map((route) => (
              <li key={route.path}>
                <Link to={route.path}>{route.title}</Link>
              </li>
            ))}
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Nav;
