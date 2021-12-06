import React, { useEffect, useState } from "react";
import Game from "./Game";
import Cell from "./Cell";
import Revealed from "./Revealed";

const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(10);
  const [mineLocations, setMineLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  


 
 const restartGame = () => {
    const newBoard = Game(8, 8, 10, setMineLocations);
    setNonMineCount(10)
    setGrid(newBoard.board);
    setMineLocations(newBoard.mineLocation);
    setGameOver(false);
    
  }

  useEffect(() => {
    // Creating a board
    function freshBoard() {
      const newBoard = Game(8, 8, 10, setMineLocations);
      setMineLocations(newBoard.mineLocation);
      setGrid(newBoard.board);
    }
    freshBoard();
  }, []);

  // On Right Click
  const updateFlag = (e, x, y) => {
    if (grid[x][y].flagged || gameOver) {
      e.preventDefault();
      grid[x][y].flagged = false;
      return setNonMineCount(nonMineCount + 1);
      
    }
    e.preventDefault() ;
    let newGrid = JSON.parse(JSON.stringify(grid));
    console.log(newGrid[x][y]);
    newGrid[x][y].flagged = true ;
    setGrid(newGrid);
    setNonMineCount(c => Math.max(c - 1, 0));
    
  };

  // Reveal Cell
  const revealCell = (x, y) => {
    
    if (grid[x][y].revealed || gameOver) {
      return;  
    } 
    let newGrid = JSON.parse(JSON.stringify(grid));
    if (newGrid[x][y].value === "X") {
      
      for (let i = 0; i < mineLocations.length; i++) {
        if (!newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed) {
          // setInterval(() => {
          newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed = true;
          setGrid(newGrid);
          setGameOver(true);
        }
      }
    } else {
      let newRevealedBoard = Revealed(newGrid, x, y, nonMineCount);
      setGrid(newRevealedBoard.arr);
      
    }
    
  };

  return (
    <div className="container">
      <p> {nonMineCount}</p>
      {gameOver}
      {grid.map((singleRow, index1) => {
        return (
          <div style={{ display: "flex" }} key={index1}>
            {singleRow.map((singleBlock, index2) => {
              return (
                <div>
                  <Cell
                    
                    revealCell={revealCell}
                    details={singleBlock}
                    updateFlag={updateFlag}
                    key={index2}
                  />
                </div>
              );
            })}
          </div>
          
        );
        
      })}
      {gameOver && <button className="gameover" onClick={restartGame} >TRY AGAIN</button>}
      {gameOver && <h1 className="crvena" >GAME OVER</h1>}
    </div>
    
  );
  
};

export default Board;


