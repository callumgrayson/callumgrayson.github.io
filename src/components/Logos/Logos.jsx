import React from "react";
import CG1 from "./images/CG1-64.png";
import CG1Inv from "./images/CG1-Inv-64.png";
import CG2 from "./images/CG2-64.png";
import CG3 from "./images/CG3-64.png";
import CG4 from "./images/CG4-64.png";
import CG5 from "./images/CG5-64.png";
import CG7 from "./images/CG7-64.png";
import CG8 from "./images/CG8-64.png";
import CG9 from "./images/CG9-64.png";
// import CG6 from "./images/CG6-64.png";
import "./Logos.css";

const logosList = [
  { src: CG1, title: "CG1" },
  { src: CG1Inv, title: "CG1Inv" },
  { src: CG2, title: "CG2" },
  { src: CG7, title: "CG7" },
  { src: CG3, title: "CG3" },
  { src: CG4, title: "CG4" },
  { src: CG5, title: "CG5" },
  { src: CG8, title: "CG8" },
  { src: CG9, title: "CG9" },
];

function Logos() {
  return (
    <div>
      <h3>Logos</h3>
      <div className="logos-box">
        {logosList.map((item, idx) => (
          <div className="logo-row">
            <h4>{idx + 1}</h4>
            <div className="logo-box">
              <img src={item.src} alt={`Logo - ${item.title}`} />
            </div>
            <div className="logo-box black">
              <img src={item.src} alt={`Logo - ${item.title}`} />
            </div>
            <div className="logo-box gray">
              <img src={item.src} alt={`Logo - ${item.title}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Logos;
