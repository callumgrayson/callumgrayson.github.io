import { Outlet, Link } from "react-router-dom";
import "./Layout.css";

function Layout() {
  return (
    <div className="full-page">
      <header className="header">
        <span>CALLUMGRAYSON.GITHUB.IO</span>
      </header>
      <div className="flex-row-box">
        <div className="nav-box">
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
          <div className="titlebarbox">
            titlebar height is the padding on this div...
          </div>
          <Outlet />
        </div>
      </div>
      <footer className="footer">Footer stuff</footer>
    </div>
  );
}

export default Layout;
