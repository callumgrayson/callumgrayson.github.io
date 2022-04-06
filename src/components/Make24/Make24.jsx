import { useState } from "react";
import { make24 } from "./maker24";
import "./styles.css";

function validate(num, setter) {
  if (num.length === 4) {
    return num;
  } else {
    setter("You must enter a valid 4 digit number");
    return false;
  }
}

function Make24() {
  const [result, setResult] = useState([]);
  const [digits, setDigits] = useState("");

  function handlerDigits(e) {
    setDigits(e.target.value);
    // console.log("e", e);
  }
  function handlerDigitsFocus(e) {
    if (e.detail === "2" || e.type === "dblclick") e.target.select();
    if (e.type === "focus") e.target.select();
  }

  function handleSubmit(e) {
    e.preventDefault();
    let num = `${e.target[0].value}`;
    let numStr = validate(num, setResult);
    if (numStr) {
      let newResult = make24.solve24(numStr);
      //   console.log("newResult", newResult);
      setResult(newResult);

      //   clearInput();
    } else {
      //   clearInput();
      return false;
    }
  }

  return (
    <div className="make24-container">
      <h1>Make 24</h1>
      <div className="blurb">
        Enter any four digit number to see the ways the add, subtract, mulitply
        and divide operations, along with parentheses can be mixed with the
        digits to result in 24.
      </div>
      <form className="input-area" onSubmit={handleSubmit}>
        <div className="in1">
          <label htmlFor="digit-input">Number </label>
          <input
            type="number"
            name="digit-input"
            id="digit-input"
            required
            onChange={handlerDigits}
            onFocus={handlerDigitsFocus}
            onClick={handlerDigitsFocus}
            onDoubleClick={handlerDigitsFocus}
            value={digits}
          />
          <input type="submit" value="Go" />
        </div>
      </form>
      <div className="output-area">
        <h3>Arrangements</h3>
        <div className="output">
          {typeof result === "string" && result}
          {Array.isArray(result) &&
            result.map((item) => <div key={item}>{item}</div>)}
        </div>
      </div>
    </div>
  );
}

export default Make24;
