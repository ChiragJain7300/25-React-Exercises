import "./css/tic.css";
import React, { useEffect, useState } from "react";
function Square({ value, onClick }) {
  return (
    <button
      style={{
        width: "80px",
        height: "80px",
        border: "1px solid yellow",
        borderRadius: "0",
        padding: "0",
        fontSize: "28px",
      }}
      onClick={onClick}
    >
      {value}
    </button>
  );
}
function TicTacToe() {
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const [playerValue, setPlayerValue] = useState(Array(9).fill(""));
  const [isX, setIsX] = useState(false);
  const [status, setStatus] = useState("");

  const checkWinner = (arr) => {
    const winningPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
    ];
    for (let i = 0; i < winningPattern.length; i++) {
      const [x, y, z] = winningPattern[i];
      if (arr[x] && arr[x] === arr[y] && arr[x] === arr[z]) {
        return arr[x];
      }
    }
    return null;
  };
  const handleClick = (currSquare) => {
    let cpy = [...playerValue];
    if (checkWinner(playerValue) || cpy[currSquare]) return;
    cpy[currSquare] = isX ? "X" : "O";
    setIsX(!isX);
    setPlayerValue(cpy);
  };
  useEffect(() => {
    if (!checkWinner(playerValue) && playerValue.every((item) => item !== "")) {
      setStatus("This is a Draw !!! Please restart");
    } else if (checkWinner(playerValue)) {
      setStatus(`${checkWinner(playerValue)} is the winner`);
      console.log(status);
    } else {
      setStatus(`Next Turn ${isX ? "X" : "O"}`);
    }
  }, [playerValue, isX]);

  console.log(checkWinner(playerValue));

  return (
    <>
      <div className="gameCont">
        <div className="tic-row">
          <Square onClick={() => handleClick(0)} value={playerValue[0]} />
          <Square onClick={() => handleClick(1)} value={playerValue[1]} />
          <Square onClick={() => handleClick(2)} value={playerValue[2]} />
        </div>
        <div className="tic-row">
          <Square onClick={() => handleClick(3)} value={playerValue[3]} />
          <Square onClick={() => handleClick(4)} value={playerValue[4]} />
          <Square onClick={() => handleClick(5)} value={playerValue[5]} />
        </div>
        <div className="tic-row">
          <Square onClick={() => handleClick(6)} value={playerValue[6]} />
          <Square onClick={() => handleClick(7)} value={playerValue[7]} />
          <Square onClick={() => handleClick(8)} value={playerValue[8]} />
        </div>
      </div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>{status}</h2>
      <button onClick={() => location.reload()}>Restart</button>
    </>
  );
}

export default TicTacToe;
