import { Component } from "react";

class Player extends Component {
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //         playerName: props.playerName,
  //         playerHighScore : props.playerHighScore,
  //         playerActive : props.playerActive,
  //         playerResign: props.playerResign
  //     }
  // }

  randomOperations = () => {
    const operations = ["+", "-", "*", "/"];

    return operations[Math.floor(Math.random() * 4)];
  };

  render() {
    return (
      <div key={Math.random()} className={"player " + this.props.activeClass} >
        <h2>Game Points: {this.props.sessionPoints}</h2>
        <h3>{this.props.playerName}</h3>
        <h4>Moves: {this.props.sessionMoves}</h4>
        <h4>
          Scores:
          {this.props.playerScores.map((score) => (
            <span key={Math.random()}>{" " + score}</span>
          ))}
        </h4>
        <button onClick={() => this.props.operate("+", this.props.playerName)}>
          Add1
        </button>
        <button onClick={() => this.props.operate("-", this.props.playerName)}>
          Decrement3
        </button>
        <button onClick={() => this.props.operate("*", this.props.playerName)}>
          Multiply2
        </button>
        <button onClick={() => this.props.operate("/", this.props.playerName)}>
          Divide2
        </button>
        <button
          onClick={() =>
            this.props.operate(this.randomOperations(), this.props.playerName)
          }
        >
          MagicB
        </button>
        <button onClick={() => this.props.resign(this.props.playerName)}>
          Resign
        </button>
      </div>
    );
  }
}

export default Player;
