  import "./TicTacToeComponent.css";

  export default function TicTacToeComponent() {
  return (
      <div className="tictactoe">
      <div className="board">
          <div className="row">
              <div className="cell">X</div>
              <div className="cell">O</div>
              <div className="cell">X</div>
          </div>
          <div className="row">
              <div className="cell">O</div>
              <div className="cell">X</div>
              <div className="cell">O</div>
          </div>
          <div className="row">
              <div className="cell">X</div>
              <div className="cell">O</div>
              <div className="cell">X</div>
          </div>
      </div>
      </div>
  );
}
