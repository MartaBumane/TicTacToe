import React, { useState } from "react";
import "./App.css";
import { isGameOver, grid, changePlayer, setDisability, gameOverStatus} from "./Tic-Tac-toe";
import { GridItem } from "./interface";

let activePlayer = "O";
let gameStatus = "";

const App: React.FC = () => {
  const [field, setField] = useState<GridItem[]>(grid);
  const [gameOver, setGameOver] = useState<boolean>(false);

  const reset = (): any => {
    let cleanedGrid: GridItem[] = [];
    for (let i = 1; i <= 9; i++) {
      cleanedGrid.push({ value: "", isClicked: false });
    }
    setField(cleanedGrid);
    setGameOver(false);
    gameStatus = "";
  };

  if (gameOver) {
    for (let i = 0; i < field.length; i++) {
      field[i].isClicked = true;
    }
  }

  function buttonClass(j: number): any {
    if (field[j].isClicked) {
      if (field[j].value === "o" || field[j].value === "O") return "O";
      if (field[j].value === "x" || field[j].value === "X") {
        return "X";
      } else {
        return "button";
      }
    } else {
      return "button";
    }
  }

  function changeStatus(j: number): void {
    field[j].isClicked = true;
    activePlayer = changePlayer(activePlayer);
    field[j].value = activePlayer;
    setField([...field]);

    if (isGameOver(field)) {
      if (gameOverStatus(field) !== "Game Over, try again!") {
        gameStatus =
          activePlayer +
          " " +
          gameOverStatus(field) +
          ", " +
          activePlayer +
          " wins!";
      } else {
        gameStatus = gameOverStatus(field);
      }
      setGameOver(true);
      return;
    }
  }

  function createTable() {
    let table = [];

    for (let i = 0; i < 9; i += 3) {
      let children = [];
      for (let j = i; j < i + 3; j++) {
        children.push(
          <td key={`${i}${j}`} className="grid">
            <button
              disabled={setDisability(field, j)}
              onClick={() => changeStatus(j)}
              className={buttonClass(j)}
            >
              {field[j].value}
            </button>
          </td>
        );
      }
      table.push(<tr key={i}>{children}</tr>);
    }
    return table;
  }
  function gameStatusForH3(): string {
    return gameStatus;
  }

  return (
    <div className={`App ${gameOver ? "gameOver" : ""}`}>
      <header className="AppHeader">
        <h1>Tic Tac Toe</h1>
        <table>
          <tbody>{createTable()}</tbody>
        </table>
        <h3 className="gameStatus">{gameStatusForH3()}</h3>
        <button className="reset" onClick={() => reset()}>
          Reset
        </button>
      </header>
    </div>
  );
};

export default App;
