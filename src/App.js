import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="App">
      <h1>MineSweeper</h1>
      <div className="board">
        <Board />
        
      </div>
    </div>
  );
}

export default App;
