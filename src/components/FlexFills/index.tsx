import { useEffect, useState } from "react";
import "./styles.css";

// type Props = {}

function FlexFills() {
  const [boxes, setBoxes] = useState<number[]>([]);

  function handleRerun() {
    setBoxes([]);
  }

  useEffect(() => {
    const nextBoxes = [...boxes, boxes.length];

    let t: any;

    if (boxes.length < 13) {
      t = setTimeout(() => {
        setBoxes(nextBoxes);
      }, 400);
    }

    return () => clearTimeout(t);
  }, [boxes]);

  return (
    <>
      <button className="rerun" onClick={handleRerun}>
        Rerun
      </button>
      <div className="quarter-split">
        <div className="quarter-one">
          {boxes.map((box, idx) => (
            <div key={box} className="box">
              {box}
            </div>
          ))}
        </div>
        <div className="quarter-one vertical">
          {boxes.map((box, idx) => (
            <div key={box} className="box">
              {box}
            </div>
          ))}
        </div>
        <div className="quarter-one reverse-row">
          {boxes.map((box, idx) => (
            <div key={box} className="box">
              {box}
            </div>
          ))}
        </div>
        <div className="quarter-one reverse-column">
          {boxes.map((box, idx) => (
            <div key={box} className="box">
              {box}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default FlexFills;
