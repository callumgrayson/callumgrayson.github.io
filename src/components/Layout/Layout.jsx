import { Outlet, Link } from "react-router-dom";
import MenuButton from "../Buttons/MenuButton";
import useMenuState from "./useMenuState";
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
        <div className={`nav-box ${showMenu ? "open" : ""}`}>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/nothing-here">Nothing Here</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="outlet-box">
          <Outlet />
        </div>
      </div>
      {/* <footer className="footer">Footer stuff</footer> */}
    </div>
  );
}

export default Layout;
