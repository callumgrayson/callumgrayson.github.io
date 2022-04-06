import { Link } from "react-router-dom";
import "./NoMatch.css";

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <div className="image-box">
        <img
          src="https://nerdreactor.com/wp-content/uploads/2014/06/stormtrooper.jpg"
          alt="Storm Troopers saying move along, move along."
        />
      </div>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatch;
