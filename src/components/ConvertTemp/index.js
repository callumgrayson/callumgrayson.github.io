import { useState } from "react";
import "./styles.css";

const defaultPrecision = 6;

function getPrecision(value) {
  return value
    .toString()
    .split("")
    .filter((x) => /\d/.test(x)).length;
}

function convertFtoC(value, precision) {
  return Number(
    (((value - 32) * 5) / 9).toPrecision(
      Math.max(precision || 0, defaultPrecision)
    )
  );
}

function convertCtoF(value, precision) {
  return Number(
    ((value / 5) * 9 + 32).toPrecision(
      Math.max(precision || 0, defaultPrecision)
    )
  );
}

function ConvertTemp() {
  const [temp, setTemp] = useState({ value: 1, unit: "c" });

  function handleC(evt) {
    setTemp({ value: evt.target.value, unit: "c" });
  }

  function handleF(evt) {
    setTemp({ value: evt.target.value, unit: "f" });
  }

  return (
    <div>
      <h3>Convert Temperature</h3>
      {/* <div style={{ display: "flex" }}>
        <p>Precision</p>
        <p style={{ marginLeft: "10px" }}>{getPrecision(temp.value)}</p>
      </div> */}
      <div className="row">
        <input
          type="number"
          onChange={handleC}
          value={
            temp.unit === "c"
              ? temp.value
              : convertFtoC(temp.value, getPrecision(temp.value))
          }
        />
        <h4>Celsius</h4>
      </div>
      <div className="row">
        <input
          type="number"
          onChange={handleF}
          value={
            temp.unit === "f"
              ? temp.value
              : convertCtoF(temp.value, getPrecision(temp.value))
          }
        />
        <h4>Fahrenheit</h4>
      </div>
    </div>
  );
}

export default ConvertTemp;
