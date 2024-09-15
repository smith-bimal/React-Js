import { useState } from "react";

export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, red: 0, green: 0 });
  let [moveArray, setMoveArray] = useState(["no moves"]);

  const handleBlue = () => {
    setMoveArray((prevVal) => [...prevVal, `Blue moved`]);

    setMoves((prevVal) => {
      return { ...prevVal, blue: prevVal.blue + 1 };
    });
  };
  const handleYellow = () => {
    setMoveArray((prevVal) => [...prevVal, `Yellow moved`]);

    setMoves((prevVal) => {
      return { ...prevVal, yellow: prevVal.yellow + 1 };
    });
  };

  const handleRed = () => {
    setMoveArray((prevVal) => [...prevVal, `Red moved`]);

    setMoves((prevVal) => {
      return { ...prevVal, red: prevVal.red + 1 };
    });
  };

  const handleGreen = () => {
    setMoveArray((prevVal) => [...prevVal, `Green moved`]);

    setMoves((prevVal) => {
      return { ...prevVal, green: prevVal.green + 1 };
    });
  };

  return (
    <div>
      <p>{moveArray[moveArray.length - 1]}</p>
      <p>Blue Moves = {moves.blue}</p>
      <button style={{ backgroundColor: "Blue" }} onClick={handleBlue}>
        +1
      </button>
      <p>Yellow Moves = {moves.yellow}</p>
      <button
        style={{ backgroundColor: "Yellow", color: "Black" }}
        onClick={handleYellow}
      >
        +1
      </button>
      <p>Red Moves = {moves.red}</p>
      <button style={{ backgroundColor: "Red" }} onClick={handleRed}>
        +1
      </button>
      <p>Green Moves = {moves.green}</p>
      <button style={{ backgroundColor: "Green" }} onClick={handleGreen}>
        +1
      </button>
    </div>
  );
}
