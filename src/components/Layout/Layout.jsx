import { Outlet, Link, Route } from "react-router-dom";
import MenuButton from "../Buttons/MenuButton";
import useMenuState from "./useMenuState";
import routesMap from "../Routing/routesMap";
import "./Layout.css";

function Layout() {
  const [showMenu, handler] = useMenuState();

  return (
    <div className="full-page">
      <header className="header">
        <span>CALLUMGRAYSON.GITHUB.IO</span>
        <MenuButton showMenu={showMenu} handler={handler} />
      </header>
      <div className="flex-row-box">
        <div className="outlet-box">
          <Outlet />
        </div>
        <div className={`nav-box ${showMenu ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {routesMap.map((route) => (
                <li>
                  <Link to={route.path}>{route.title}</Link>
                </li>
              ))}
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* <footer className="footer">Footer stuff</footer> */}
    </div>
  );
}

export default Layout;
